export default {
  id: 'id',
  type: 'kind',
  phone: {
    path: 'id.user',
    formatting: (value: any) => {
      return value.split('@')[0];
    },
  },
  author: {
    path: 'contact',
    formatting: (value: any) => {
      return value.isMyContact ? value.formattedName : value.pushname;
    },
  },
  timestamp: 't',
};
