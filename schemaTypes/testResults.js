// schemaTypes/testResults.js
export default {
  name: 'testResults',
  title: 'Test Results',
  type: 'document',
  fields: [
    {
      name: 'invitationToken',
      title: 'Invitation Token',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'invitation',
      title: 'Invitation',
      type: 'reference',
      to: [{ type: 'testInvitation' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      description: 'Guest user first name'
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      description: 'Guest user last name'
    },
    {
      name: 'personalityResults',
      title: 'Personality Test Results',
      type: 'object',
      fields: [
        { name: 'D', type: 'number' },
        { name: 'I', type: 'number' },
        { name: 'S', type: 'number' },
        { name: 'C', type: 'number' }
      ]
    },
    {
      name: 'donesResults',
      title: 'Spiritual Gifts Test Results',
      type: 'object',
      fields: [
        { name: 'evangelismo', title: 'Evangelismo', type: 'number' },
        { name: 'liderazgo', title: 'Liderazgo', type: 'number' },
        { name: 'misericordia', title: 'Misericordia', type: 'number' },
        { name: 'administracion', title: 'Administración', type: 'number' },
        { name: 'profecia', title: 'Profecía', type: 'number' },
        { name: 'dar', title: 'Dar', type: 'number' },
        { name: 'ensenanza', title: 'Enseñanza', type: 'number' },
        { name: 'pastoreo', title: 'Pastoreo', type: 'number' },
        { name: 'fe', title: 'Fe', type: 'number' },
        { name: 'exhortacion', title: 'Exhortación', type: 'number' },
        { name: 'servicio', title: 'Servicio', type: 'number' },
        { name: 'ayuda', title: 'Ayuda', type: 'number' },
        { name: 'sabiduria', title: 'Sabiduría', type: 'number' },
        { name: 'conocimiento', title: 'Conocimiento', type: 'number' },
        { name: 'hospitalidad', title: 'Hospitalidad', type: 'number' },
        { name: 'discernimiento', title: 'Discernimiento', type: 'number' }
      ]
    },
    {
      name: 'skillsResults',
      title: 'Skills Test Results',
      type: 'object',
      description: 'RIASEC assessment results',
      fields: [
        { name: 'R', title: 'Realista', type: 'number' },
        { name: 'I', title: 'Investigador', type: 'number' },
        { name: 'A', title: 'Artístico', type: 'number' },
        { name: 'S', title: 'Social', type: 'number' },
        { name: 'E', title: 'Emprendedor', type: 'number' },
        { name: 'C', title: 'Convencional', type: 'number' }
      ]
    },
    {
      name: 'passionResults',
      title: 'Passion Test Results',
      type: 'object',
      description: 'Results from the Passion test',
      fields: [
        {
          name: 'selectedGroups',
          title: 'Selected Groups',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'All groups initially selected by the user'
        },
        {
          name: 'topFiveGroups',
          title: 'Top Five Groups',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'The five groups the user is most passionate about'
        },
        {
          name: 'selectedPassions',
          title: 'Selected Passions',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'All passion types selected by the user'
        },
        {
          name: 'topThreePassions',
          title: 'Top Three Passions',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'The three main ways the user expresses passion'
        }
      ]
    },
    {
      name: 'experienceResults',
      title: 'Experience Test Results',
      type: 'object',
      description: 'Results from the Experience test',
      fields: [
        {
          name: 'experienceTypes',
          title: 'Experience Types',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Types of experiences selected by the user'
        },
        {
          name: 'significantEvents',
          title: 'Significant Events',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Significant events selected by the user'
        },
        {
          name: 'positiveExperiences',
          title: 'Positive Experiences',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Positive experiences selected by the user'
        },
        {
          name: 'painfulExperiences',
          title: 'Painful Experiences',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Custom painful experiences entered by the user'
        },
        {
          name: 'lessonsLearned',
          title: 'Lessons Learned',
          type: 'text',
          description: 'Lessons the user has learned from their experiences'
        },
        {
          name: 'impactOnMinistry',
          title: 'Impact on Ministry',
          type: 'text',
          description: 'How experiences have influenced the user\'s ministry'
        },
        {
          name: 'topTwoExperiences',
          title: 'Top Two Experiences',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'The two most significant experiences identified by the user'
        }
      ]
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      email: 'invitation.email',
      firstName: 'firstName',
      lastName: 'lastName',
      token: 'invitationToken'
    },
    prepare(selection) {
      const { email, firstName, lastName, token } = selection;
      const displayName = firstName && lastName ? `${firstName} ${lastName}` : email;
      return {
        title: displayName ? `Results for ${displayName}` : `Results for ${token.substring(0, 8)}...`,
        subtitle: 'Test Results'
      };
    }
  }
}