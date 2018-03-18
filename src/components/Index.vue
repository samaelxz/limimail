<template>
  <Layout style="width: 100%;height: 100%;">
    <Sider hide-trigger>
      <side-bar></side-bar>
    </Sider>
    <Layout style="overflow-x: scroll;">
      <Header style="background: #FFF;padding: 0;min-width: 1000px;">
        <top-bar></top-bar>
      </Header>
      <Content style="min-width: 1000px;display: flex;position: relative;">
        <!-- <div style="width: 340px;">1</div>
        <div style="background: orange;position: absolute;left: 340px;right: 0;top: 0;bottom: 0;">2</div> -->
        <Row style="width: 100%;">
          <Col span="8" style="height: 100%;">
            <div class="mail-list-container">
              <div class="toolbar-list">
                <Row>
                  <Col span="7" style="line-height: 32px;">
                    <Checkbox v-model="selectedState"></Checkbox>
                    <Dropdown placement="bottom-start">
                      <a href="javascript:void(0)">
                        All
                        <Icon type="arrow-down-b"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem>all</DropdownItem>
                        <DropdownItem>none</DropdownItem>
                        <DropdownItem>read</DropdownItem>
                        <DropdownItem>unread</DropdownItem>
                        <DropdownItem>starred</DropdownItem>
                        <DropdownItem>unstarred</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                  <Col span="17" style="text-align: right;">
                    <ButtonGroup>
                      <Button type="" icon="filing"></Button>
                      <Button type="" icon="trash-b"></Button>
                      <Button type="" icon="star"></Button>
                      <Button type="" icon="alert-circled"></Button>
                      <Button type="" icon="ios-glasses"></Button>
                    </ButtonGroup>
                    <!-- <ButtonGroup>
                      <Button type="text">
                        Date+
                      </Button>
                      <Button type="text">
                        Date-
                      </Button>
                    </ButtonGroup>
                    <Button type="text">
                      <Icon type="ios-glasses-outline" size=24></Icon>
                    </Button> -->
                  </Col>
                </Row>
              </div>
              <div class="mail-list">
                <mail-card></mail-card>
                <mail-card coloredBG="true"></mail-card>
                <mail-card></mail-card>
                <mail-card coloredBG="true"></mail-card>
                <mail-card></mail-card>
                <div class="page-container">
                  <Page :total="100"></Page>
                </div>
              </div>
            </div>
          </Col>
          <Col span="16" style="height: 100%;">
            <div class="mail-detail-container">
              <div class="mail-detail-title">Join the Dark Side, Bruce!</div>
              <div class="mail-detail-info">
                <Row>
                  <Col span="2" style="text-align: center;">
                    <Avatar shape="square" icon="person" />
                  </Col>
                  <Col span="10">
                    <div>Darth Vader</div>
                    <Row>
                      <Col span="20"><div><span>darthvad54645654654er@darkside.com</span> to me</div></Col>
                      <Col span="4">
                        <Dropdown placement="bottom-start">
                          <a href="javascript:void(0)">
                            <Icon type="arrow-down-b" size="18"></Icon>
                          </a>
                          <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem>北京烤鸭</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Col>
                  <Col span="12" style="text-align: right;">
                    <Icon type="paperclip" size="20" style="color: #aaa;" />
                    <span style="margin-left: 10px;font-weight: bold;">Jan 9, 11:30PM</span>
                  </Col>
                </Row>
              </div>
              <div class="mail-detail-content">
                <p>Hello Bruce</p>
                <br>
                <p>In OS X, events are delivered as an asynchronous stream. This event stream proceeds “upward” (in an architectural sense) through the various levels of the system—the hardware to the window server to the Event Manager—until each event reaches its final destination: an application. As it passes through each subsystem, an event may change structure but it still identifies a specific user action.
                </p>
                <br>
                <blockquote>Note: Lower levels of the system trap and handle some events early in the event stream. These events are never routed to a Cocoa application. These events are generated by reserved keys or key combinations, such as the power and media-eject keys.</blockquote>
                <br>
              </div>
              <div class="mail-detail-append">
                <div><span style="font-weight: 500;font-size: 1.2em;">Attachments</span><span style="color: #aaa;">(3 files, 680KB)</span></div>
                <div>
                  <div style="line-height: 30px;height: 30px;">
                    <Icon type="image" size="22" style="color: #aaa;" />
                    <span>force.gif</span><span>(128KB)</span>
                  </div>
                  <Icon type="ionic" size="22" style="color: #aaa;" />
                  <Icon type="social-youtube-outline" size="22" style="color: #aaa;" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  </Layout>
  <!-- <div class="container">
    <side-bar></side-bar>
    <top-bar></top-bar>
  </div> -->
</template>

<script>
import SideBar from './SideBar'
import TopBar from './TopBar'
import MailCard from './MailCard'

export default {
  components: {SideBar, TopBar, MailCard},
  data () {
    return {
      selectedState: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.mail-list-container {
  height: 100%;
  background: #FFF;
  padding: 0 5px;
  background: #ececec;
}

.mail-list-container:before, .mail-list-container:after {

}

.toolbar-list {
  padding: 8px 10px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

.mail-list {
  height: 100%;
  padding-top: 48px;
  overflow-y: auto;
  background: #fff;
  position: relative;
  border-left: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
}

/*.mail-list:before {
  content: '';
  display: block;
  width: 1px;
  height: 100%;
  background: #dddee1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.mail-list:after {
  content: '';
  display: block;
  width: 1px;
  height: 100%;
  background: #dddee1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}*/

.page-container {
  text-align: center;
  margin: 20px auto;
}

.mail-detail-container {
  height: 100%;
  background: #fff;
  border-left: 1px solid #dddee1;
  padding: 0 20px;
}

.mail-detail-title {
  /*background: #54728c;*/
  color: #54728c;
  padding: 16px 0;
  font-size: 1.6em;
}
.mail-detail-info {
  padding: 10px 0;
  border-bottom: 1px dotted #eeeff1;
}
.mail-detail-content {
  padding: 10px 0;
  font-size: 1.2em;
  border-bottom: 1px dotted #eeeff1;
}
.mail-detail-append {
  padding: 10px 0;
}
</style>
