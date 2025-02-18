export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: [
            {title: 'Admin', value: 'admin'},
            { title: 'Elder', value: 'elder' },
            { title: 'Staff', value: 'staff' },
            {title: 'Member', value: 'member'}
          ]
        },
        validation: Rule => Rule.required()
      }
    ]
  }
  