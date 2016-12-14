export default [
  {
    key: 'applicationTabs',
    index: 0,
    showBackButton: {
      ios: false,
      android: false,
    },
  },
  {
    key: 'eventDetails',
    index: 1,
    showBackButton: {
      ios: true,
      android: true,
    },
  },
  {
    key: 'settingsViewAndroid',
    index: 2,
    title: 'Innstillinger',
    showBackButton: {
      ios: null,
      android: true,
    },
  },
];
