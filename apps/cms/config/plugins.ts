export default ({env}) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET')
          }
        }
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10
    }
  },
  translate: {
    enabled: true,
    config: {
      provider: 'deepl',
      providerOptions: {
        apiKey: env('DEEPL_API_KEY'),
        apiUrl: 'https://api.deepl.com',
        localeMap: {
          EN: 'EN-US'
        },
        apiOptions: {
          formality: 'default'
        }
      },
      translatedFieldTypes: [
        'string',
        {type: 'text', format: 'plain'},
        {type: 'richtext', format: 'markdown'},
        'component',
        'dynamiczone'
      ],
      translateRelations: true
    }
  }
})
