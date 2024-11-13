<script setup lang="ts">

useHead({
  script: [
    {
      src: "https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"
    }
  ]
});

const props = defineProps({
  view: {
    type: String,
    default: "button"
  },
  parentId: {
    type: String,
    default: "yandex-id-container"
  },
  buttonView: {
    type: String,
    default: "icon"     // main additional icon iconBg
  },
  buttonTheme: {
    type: String,
    default: "light"
  },
  buttonSize: {
    type: String,
    default: "m"
  },
  buttonBorderRadius: {
    type: Number,
    default: 0
  },
  buttonIcon: {
    type: String,
    default: "ya"
  },
  customBorderWidth: {
    type: Number,
    default: 1
  },
});


const YaAuthButtonActive = ref(true);


const runtimeConfig = useRuntimeConfig();

if ( process.browser ) {

//console.debug(runtimeConfig);

  window.YaAuthSuggest
    .init(
      {
        client_id: runtimeConfig.public.yandexClientID,
        response_type: "token",
        redirect_uri: runtimeConfig.public.yandexClientRedirect
      },
      runtimeConfig.public.url,
      {
        view: props.view,
        parentId: props.parentId,
        buttonView: props.buttonView,
        buttonTheme: props.buttonTheme,
        buttonSize: props.buttonSize,
        buttonBorderRadius: props.buttonBorderRadius,
        buttonIcon: props.buttonIcon,
        customBorderWidth: props.customBorderWidth
      }
    )
    .then( res => {
//    console.log(res);
      res.handler()
        .then(data => {
//        console.debug('Сообщение с токеном', data);

          const YaAuthAccessTokenState = useState('YaAuthAccessToken', () => data.access_token);
          console.debug('YaAuthAccessTokenState', YaAuthAccessTokenState);

          YaAuthButtonActive.value = false;
        })
        .catch(error => console.error('Обработка ошибки', error))
    });

}

</script>

<template>

  <div :id="parentId" class="flex" :class="[YaAuthButtonActive ? '' : 'hidden']" style="width: 44px; height: 44px;"></div>

</template>
