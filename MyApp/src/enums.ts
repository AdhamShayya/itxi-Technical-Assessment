// better to use enums instead of constants (to avoid chars Errors)
export enum onboardingNames {
  welcome = 'Welcome',
  companyID = 'CompanyID',
  pickVoice = 'PickVoice',
}


export enum homeRoutes {
  main = 'Main',
}
export enum appRoutes {
  onboarding = 'Onboarding',
  mainRoute = 'MainRoute',
  voiceBot = 'Voicebot',
  settingsStack = 'SettingsStack'
}

export enum settingsRoutes {
  settings = 'Settings',
  pickVoice = 'PickVoice',
  setCompanyID = 'SetCompanyID',
  enterCompanyID = 'EnterCompanyID',
  companyID = 'CompanyID'
}
