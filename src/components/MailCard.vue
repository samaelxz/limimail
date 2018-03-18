<template>
  <Card :bordered="false" class="card-mail" :style="{ background: coloredBG ? '#f5f5f5' : '#fff' }">
    <p slot="title" style="font-weight: 400;font-size: .9em;">
      <Checkbox></Checkbox>
      徐洲-samaelxz@163.com
    </p>
    <p slot="extra" style="font-size: .8em;">Sep 29 2017 13:51:59</p>
    <div style="">
      <div class="title-mail">法律框架搭建巴洛克风格不能离开</div>
      <div class="content-mail">的给你发给你换个玫瑰花玫瑰花没干嘛--南京大学 电子信息科学与技术系 徐洲联系电话：186173</div>
      <Row>
        <Col span="6" style="line-height: 35px;">
          <div class="num-mail">1</div>
        </Col>
        <Col span="18" style="text-align: right;">
          <Button type="text">
            <Icon type="ios-photos-outline" size=18></Icon>
            10M
          </Button>
          <Button type="text" class="icon-mail">
            <Icon type="ios-bolt" size=24></Icon>
          </Button>
          <Button type="text" class="icon-mail">
            <Icon type="ios-pricetags" size=18></Icon>
          </Button>
          <Button type="text" class="icon-mail">
            <Icon type="android-delete" size=20></Icon>
          </Button>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    coloredBG: {
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-mail {
  margin-bottom: 5px;
  border-radius: 0;
}

.icon-mail {
  width: 40px;
  height: 35px;
  padding: 0;
  color: #AAB3B6;
}
.icon-mail:hover {
  color: #57a3f3;
  background-color: transparent;
  border-color: transparent;
}

.title-mail {
  font-weight: 500;
  padding-bottom: 10px;
}

.content-mail {
  color: #6E7476;
  padding-bottom: 10px;
  font-size: .9em;
  /*display: none;*/
}

.num-mail{
  display: inline-block;
  height: 20px;
  border-radius: 10px;
  min-width: 20px;
  border: 1px solid #AAB3B6;
  /*background: #AAB3B6;*/
  /*border: 1px solid transparent;*/
  color: #AAB3B6;
  line-height: 18px;
  text-align: center;
  padding: 0 6px;
  font-size: 12px;
  white-space: nowrap;
  transform-origin: -10% center;
  z-index: 10;
  box-shadow: 0 0 0 1px #fff;
}
</style>
