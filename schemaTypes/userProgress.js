export default {
  name: 'userProgress',
  title: 'User Progress',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      description: 'Reference to the user',
      validation: Rule => Rule.required()
    },
    // Personality Test
    {
      name: 'personalityTestCompleted',
      title: 'Personality Test Completed',
      type: 'boolean',
      description: 'Flag to track if the personality test is completed'
    },
    {
      name: 'personalityTestCompletionDate',
      title: 'Personality Test Completion Date',
      type: 'datetime',
      description: 'Date when the personality test was completed'
    },
    {
      name: 'personalityTestResults',
      title: 'Personality Test Results',
      type: 'object',
      description: 'DISC assessment results',
      fields: [
        { name: 'D', type: 'number' },
        { name: 'I', type: 'number' },
        { name: 'S', type: 'number' },
        { name: 'C', type: 'number' }
      ]
    },
    // Dones Test
    {
      name: 'donesTestCompleted',
      title: 'Dones Test Completed',
      type: 'boolean',
      description: 'Flag to track if the Dones test is completed'
    },
    {
      name: 'donesTestCompletionDate',
      title: 'Dones Test Completion Date',
      type: 'datetime',
      description: 'Date when the Dones test was completed'
    },
    {
      name: 'donesTestResults',
      title: 'Dones Test Results',
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
    // Skills Test
    {
      name: 'skillsTestCompleted',
      title: 'Skills Test Completed',
      type: 'boolean',
      description: 'Flag to track if the Skills test is completed'
    },
    {
      name: 'skillsTestCompletionDate',
      title: 'Skills Test Completion Date',
      type: 'datetime',
      description: 'Date when the Skills test was completed'
    },
    {
      name: 'skillsTestResults',
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
    // Passion Test
    {
      name: 'passionTestCompleted',
      title: 'Passion Test Completed',
      type: 'boolean',
      description: 'Flag to track if the Passion test is completed'
    },
    {
      name: 'passionTestCompletionDate',
      title: 'Passion Test Completion Date',
      type: 'datetime',
      description: 'Date when the Passion test was completed'
    },
    {
      name: 'passionTestResults',
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
          description: 'The five groups the user is most passionate about',
          validation: Rule => Rule.max(5)
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
          description: 'The three main ways the user expresses passion',
          validation: Rule => Rule.max(3)
        }
      ]
    },
    // Experience Test
    {
      name: 'experienceTestCompleted',
      title: 'Experience Test Completed',
      type: 'boolean',
      description: 'Flag to track if the Experience test is completed'
    },
    {
      name: 'experienceTestCompletionDate',
      title: 'Experience Test Completion Date',
      type: 'datetime',
      description: 'Date when the Experience test was completed'
    },
    {
      name: 'experienceTestResults',
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
          description: 'The two most significant experiences identified by the user',
          validation: Rule => Rule.max(2)
        }
      ]
    }
  ]
}