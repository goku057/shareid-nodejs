//configuring stripe 
let Publishable_Key = 'pk_test_51JORcaJf9SoYAeHidfFHK15ZMbTJjLLD4teqfy4oVAXrFeovcNIuwF1iMP95TKq3UN3zhSMXMRKCZVzY6N2lP9eI00CtSS95x9'
let Secret_Key = 'sk_test_51JORcaJf9SoYAeHia71MCvZO6oWidBT5zMJO0f4IKHTDdhIyJUsFDYezbMricS1LuhMo6LVOQtAbSbGptYYOwl7S00pu8PfzdQ'

const stripe = require('stripe')(Secret_Key);

module.exports = {
    Publishable_Key,
    stripe
}