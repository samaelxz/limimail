<template>
  <div class="container">
    <Button id="button-reg" type="ghost" size="large">直接登录</Button>
    <div class="card-log">
      <div class="text-logo">LimiMail</div>
      <Form ref="formInline">
        <FormItem prop="user">
          <Input type="text" placeholder="用户名" size="large">
            <Icon type="ios-recording" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" placeholder="密码" size="large">
            <Icon type="ios-recording-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long style="height: 40px;" @click="index">登录</Button>
        </FormItem>
        <Row>
          <Col span="12"><Checkbox v-model="rememberMe">保持登陆状态</Checkbox></Col>
          <Col span="12" style="text-align: right;">忘记密码</Col>
        </Row>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rememberMe: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  width: 100%;
  padding-top: 16%;
  position: relative;
  background: #E6F1F5;
}

.card-log {
  width: 320px;
  margin: 0 auto;
}

#button-reg {
  position: absolute;
  top: 30px;
  right: 50px;
}

.text-logo {
  font-family: Prism-Regular;
  font-size: 4.8em;
  text-align: center;
  margin-bottom: 10px;
}
</style>
