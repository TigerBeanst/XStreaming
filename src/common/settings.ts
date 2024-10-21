import i18next from '../i18n';

const {t} = i18next;

const settings = [
  {
    name: 'locale',
    type: 'radio',
    title: t('App language'),
    description: t('Set language of XStreaming'),
    data: [
      {value: 'en', text: 'English'},
      {value: 'zh', text: '简体中文'},
      {value: 'zht', text: '繁體中文'},
      {value: 'jp', text: '日本語'},
    ],
  },
  {
    name: 'theme',
    type: 'radio',
    title: t('Theme'),
    description: t('Set the app theme to take effect on the next launch'),
    data: [
      {value: 'auto', text: t('Auto')},
      {value: 'light', text: t('Light')},
      {value: 'dark', text: t('Dark')},
    ],
  },
  {
    name: 'preferred_game_language',
    type: 'radio',
    title: t('Preferred language of game'),
    description: t('Set language of cloud game'),
    data: [
      {value: '', text: 'Default'},
      {value: 'ar-SA', text: 'Arabic (Saudi Arabia)'},
      {value: 'cs-CZ', text: 'Czech'},
      {value: 'da-DK', text: 'Danish'},
      {value: 'de-DE', text: 'German'},
      {value: 'el-GR', text: 'Greek'},
      {value: 'en-GB', text: 'English (United Kingdom)'},
      {value: 'en-US', text: 'English (United States)'},
      {value: 'es-ES', text: 'Spanish (Spain)'},
      {value: 'es-MX', text: 'Spanish (Mexico)'},
      {value: 'fi-FI', text: 'Swedish'},
      {value: 'fr-FR', text: 'French'},
      {value: 'he-IL', text: 'Hebrew'},
      {value: 'hu-HU', text: 'Hungarian'},
      {value: 'it-IT', text: 'Italian'},
      {value: 'ja-JP', text: '日本語'},
      {value: 'ko-KR', text: 'Korean'},
      {value: 'nb-NO', text: 'Norwegian'},
      {value: 'nl-NL', text: 'Dutch'},
      {value: 'pl-PL', text: 'Polish'},
      {value: 'pt-BR', text: 'Portuguese (Brazil)'},
      {value: 'pt-PT', text: 'Portuguese (Portugal)'},
      {value: 'ru-RU', text: 'Russian'},
      {value: 'sk-SK', text: 'Slovak'},
      {value: 'sv-SE', text: 'Swedish'},
      {value: 'tr-TR', text: 'Turkish'},
      {value: 'zh-CN', text: '简体中文'},
      {value: 'zh-TW', text: '繁體中文'},
    ],
  },
  {
    name: 'resolution',
    type: 'radio',
    title: t('Resolution'),
    description: t('Set resolution, support 720P/1080P'),
    data: [
      {value: 720, text: '720P'},
      {value: 1080, text: '1080P'},
    ],
  },
  {
    name: 'video_format',
    type: 'radio',
    title: t('Video stream format'),
    description: t(
      'Select video stream format, if you want video fullscreen, please select Stretch or Zoom',
    ),
    data: [
      {value: '', text: t('Aspect ratio')},
      {value: 'Stretch', text: t('Stretch')},
      {value: 'Zoom', text: t('Zoom')},
      {value: '16:10', text: '16:10'},
      {value: '18:9', text: '18:9'},
      {value: '21:9', text: '21:9'},
      {value: '4:3', text: '4:3'},
    ],
  },
  {
    name: 'xhome_bitrate_mode',
    type: 'radio',
    title: t('Host stream bitrate'),
    description: t(
      'Set the host streaming bitrate (Note: Higher bitrate is not always better; the final bitrate will be determined by streaming negotiation)',
    ),
    data: [
      {value: 'auto', text: t('Auto')},
      {value: 'custom', text: t('Custom')},
    ],
  },
  {
    name: 'xcloud_bitrate_mode',
    type: 'radio',
    title: t('Cloud stream bitrate'),
    description: t(
      'Set the cloud streaming bitrate (Note: Higher bitrate is not always better; the final bitrate will be determined by streaming negotiation)',
    ),
    data: [
      {value: 'auto', text: t('Auto')},
      {value: 'custom', text: t('Custom')},
    ],
  },
  {
    name: 'codec',
    type: 'radio',
    title: t('Codec'),
    description: t(
      'If your device supports newer codecs, it can reduce the video bandwidth requirements',
    ),
    data: [
      {value: '', text: 'Auto'},
      // {value: 'video/AV1', text: 'AV1'},
      // {value: 'video/VP9', text: 'VP9'},
      {value: 'video/H265', text: 'H265'},
      // {value: 'video/VP8', text: 'VP8'},
      {value: 'video/H264-4d', text: 'H264-High'},
      {value: 'video/H264-42e', text: 'H264-Medium'},
      {value: 'video/H264-420', text: 'H264-Low'},
      // {value: 'video/flexfec-03', text: 'flexfec-03'},
      // {value: 'video/ulpfec', text: 'ulpfec'},
      // {value: 'video/rtx', text: 'rtx'},
      // {value: 'video/red', text: 'red'},
    ],
  },
  {
    name: 'maping',
    type: '',
    title: t('Key mapping'),
    description: t('Mapping key of gamepad'),
    data: [],
  },
  {
    name: 'gamepad_kernal',
    type: 'radio',
    title: t('Gamepad kernal'),
    description: t(
      'Select gamepad kernal, you can not use virtual gamepad in Web kernal',
    ),
    data: [
      {value: 'Native', text: 'Native'},
      {value: 'Web', text: 'Web'},
    ],
  },
  {
    name: 'vibration',
    type: 'radio',
    title: t('Vibration'),
    description: t(
      'If your controller supports vibration, you can set whether it vibrates during the game',
    ),
    data: [
      {value: true, text: t('Enable')},
      {value: false, text: t('Disable')},
    ],
  },
  {
    name: 'vibration_mode',
    type: 'radio',
    title: t('Vibration mode'),
    description: `${t('Native: Use native gamepad kernal to vibrate')}
${t("Device: Use Phone/Pad's vibrate")}
${t('Webview: Use Chromium kernal to vibrate')}`,
    data: [
      {value: 'Native', text: t('Native')},
      {value: 'Device', text: t('Device')},
      {value: 'Webview', text: t('Webview')},
    ],
  },
  {
    name: 'bind_usb_device',
    type: 'radio',
    title: t('Override native Xbox gamepad support'),
    description: t('bind_usb_device_description'),
    data: [
      {value: true, text: t('Enable')},
      {value: false, text: t('Disable')},
    ],
  },
  // {
  //   name: 'vibration_intensity',
  //   type: 'slider',
  //   min: 1,
  //   max: 4,
  //   step: 1,
  //   title: t('Vibration intensity'),
  //   description: t('Config vibration intensity of controller'),
  //   data: [],
  // },
  {
    name: 'dead_zone',
    type: 'slider',
    min: 0.1,
    max: 0.9,
    step: 0.01,
    title: t('Joystick dead zone'),
    description: t('Config joystick dead zone'),
    data: [],
  },
  {
    name: 'show_virtual_gamead',
    type: 'radio',
    title: t('Virtual gamepad'),
    description: t('Always display the virtual gamepad'),
    data: [
      {value: true, text: t('Enable')},
      {value: false, text: t('Disable')},
    ],
  },
  {
    name: 'virtual_gamepad_opacity',
    type: 'slider',
    min: 0.1,
    max: 1,
    step: 0.1,
    title: t('Virtual Opacity'),
    description: t('Config opacity of virtual gamepad'),
    data: [],
  },
  {
    name: 'force_region_ip',
    type: 'radio',
    title: t('Set region'),
    description: t(
      'Changing the region allows you to use XGPU services without a proxy',
    ),
    data: [
      {value: '', text: t('Default')},
      {value: '203.41.44.20', text: t('Australia')},
      {value: '200.221.11.101', text: t('Brazil')},
      {value: '194.25.0.68', text: t('Europe')},
      {value: '210.131.113.123', text: t('Japan')},
      {value: '168.126.63.1', text: t('Korea')},
      {value: '4.2.2.2', text: t('United States')},
    ],
  },
  {
    name: 'power_on',
    type: 'radio',
    title: t('Power on when streaming'),
    description: t('power_on_description'),
    data: [
      {value: true, text: t('Enable')},
      {value: false, text: t('Disable')},
    ],
  },
  {
    name: 'low_latency_mode',
    type: 'radio',
    title: t('Low Latency Mode'),
    description: t('low_latency_mode_description'),
    data: [
      {value: true, text: t('Enable')},
      {value: false, text: t('Disable')},
    ],
  },
  {
    name: 'ipv6',
    type: 'radio',
    title: t('Ipv6'),
    description: t('Prioritize using IPv6 connection'),
    data: [
      {value: true, text: t('Enable')},
      {value: false, text: t('Disable')},
    ],
  },
  {
    name: 'signaling_home',
    type: 'radio',
    title: t('Signal server') + '(xHome)',
    description: t(
      'The signaling server is a server for stream negotiation. If the host cannot connect, please try modifying this option',
    ),
    data: [],
  },
  {
    name: 'signaling_cloud',
    type: 'radio',
    title: t('Signal server') + '(xCloud)',
    description: t(
      'The signaling server is a server for stream negotiation. If the host cannot connect, please try modifying this option',
    ),
    data: [],
  },
];

export default settings;
