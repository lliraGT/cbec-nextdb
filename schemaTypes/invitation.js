// schemas/invitation.js
export default {
    name: 'invitation',
    title: 'Invitation',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: [
            { title: 'User', value: 'user' },
            { title: 'Staff', value: 'staff' },
            { title: 'Elder', value: 'elder' },
            { title: 'Admin', value: 'admin' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'token',
        title: 'Token',
        type: 'string',
        validation: Rule => Rule.required()
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
        name: 'completedAt',
        title: 'Completed At',
        type: 'datetime'
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
        name: 'invitationByToken',
        spec: {
          token: 'asc'
        }
      },
      {
        name: 'invitationByEmail',
        spec: {
          email: 'asc'
        }
      }
    ],
    preview: {
      select: {
        email: 'email',
        status: 'status',
        role: 'role'
      },
      prepare(selection) {
        const { email, status, role } = selection;
        return {
          title: email,
          subtitle: `${status} - ${role}`
        };
      }
    }
  }