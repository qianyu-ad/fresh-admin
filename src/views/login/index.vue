<template>
  <div>
    <div class="login-title">
      <h3>Admin</h3>
    </div>
    <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}" class="login-form">
      <template v-if="form">
        <a-form-item
          :validateStatus="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
          fieldDecoratorId="username"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your username!' }]}"
        >
          <a-input placeholder='Username'>
            <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item
          :validateStatus="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
          fieldDecoratorId="password"
          :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Password!' }]}"
        >
          <a-input type='password' placeholder='Password'>
            <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type='primary'
            htmlType='submit'
            :disabled="hasErrors(form.getFieldsError())"
          >
            登录
          </a-button>
        </a-form-item>
      </template>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
import { loginApi } from '@/api/auth'
export default {
  data() {
    return {
      hasErrors,
      form: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('username') && getFieldError('username')
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          loginApi(values['username'], values['password']).then(resp => {
            let data = resp.data
            if (data.status == 200) {
              this.$router.push({ path: '/' })
              this.$message.success(data.msg)
            } else {
              this.$message.error(data.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style>
.login-title {
  margin-top: 300px;
  text-align: center;
}
.login-form {
  /* position: absolute; */
  width: 500px;
  margin: 0 auto;
  /* left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -200px; */
  padding: 30px 30px 0 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
