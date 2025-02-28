// schemaTypes/testInvitation.js
export default {
    name: 'testInvitation',
    title: 'Test Invitation',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'token',
        title: 'Token',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'tests',
        title: 'Tests',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Personalidad', value: 'personalidad' },
            { title: 'Dones', value: 'dones' },
            { title: 'Habilidades', value: 'habilidades' },
            { title: 'Pasión', value: 'pasion' },
            { title: 'Experiencia', value: 'experiencia' }
          ]
        },
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Expired', value: 'expired' }
          ]
        },
        initialValue: 'pending',
        validation: Rule => Rule.required()
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: Rule => Rule.required()
      },
      {
        name: 'expiresAt',
        title: 'Expires At',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'invitedBy',
        title: 'Invited By',
        type: 'reference',
        to: [{ type: 'user' }],
        validation: Rule => Rule.required()
      }
    ],
    indexes: [
      {
        name: 'testInvitationByToken',
        spec: {
          token: 'asc'
        }
      },
      {
        name: 'testInvitationByEmail',
        spec: {
          email: 'asc'
        }
      }
    ],
    preview: {
      select: {
        email: 'email',
        status: 'status',
        testCount: 'tests'
      },
      prepare(selection) {
        const { email, status, testCount } = selection;
        return {
          title: email,
          subtitle: `${status} - ${testCount ? testCount.length : 0} tests`
        };
      }
    }
  }