<template>
  <div class="container">
    <Menu mode="horizontal" active-name="1" style="height: 100%;line-height: 62px;">
      <Row>
        <Col span="6">
          <MenuItem name="1">
            <Icon type="chatbubbles"></Icon>
              Message
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people"></Icon>
              People
          </MenuItem>
        </Col>
        <Col span="6">
          <Input icon="ios-search" style="width: 200px;"></Input>
        </Col>
        <Col span="8" style="">
          <!-- <Submenu name="3">
            <template slot="title">
              <Icon type="ios-list"></Icon>
                List
            </template>
            <MenuGroup title="Contacts">
                <MenuItem name="3-1">ether@ethercars.com</MenuItem>
                <MenuItem name="3-2">hr@limiton.cn</MenuItem>
                <MenuItem name="3-3">service@limimail.com</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem name="4">
            <Icon type="person"></Icon>
              My
          </MenuItem>
          <MenuItem name="5">
            <Icon type="ios-gear"></Icon>
              Settings
          </MenuItem>
          <Submenu name="6">
            <template slot="title">
              <Icon type="ios-color-wand"></Icon>
                Themes
            </template>
            <MenuGroup title="Themes">
                <MenuItem name="3-1">default</MenuItem>
                <MenuItem name="3-2">pink</MenuItem>
                <MenuItem name="3-3">green</MenuItem>
            </MenuGroup>
          </Submenu> -->
          <Col span="6">
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                <Icon type="ios-list"></Icon>
                List
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>ether@ethercars.com</DropdownItem>
                <DropdownItem>hr@limiton.cn</DropdownItem>
                <DropdownItem divided>service@limimail.com</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col span="6">
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                <Icon type="person"></Icon>
                My
              </a>
              <DropdownMenu slot="list">
                <p>常用于各种自定义下拉内容的场景。</p>
                <div style="text-align: right;margin:10px;">
                  <Button type="primary">关闭</Button>
                </div>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col span="6">
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                <Icon type="ios-gear"></Icon>
                Settings
              </a>
              <DropdownMenu slot="list">
                <p>常用于各种自定义下拉内容的场景。</p>
                <div style="text-align: right;margin:10px;">
                  <Button type="primary">关闭</Button>
                </div>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col span="6">
            <Dropdown trigger="click">
              <a href="javascript:void(0)">
                <Icon type="ios-color-wand"></Icon>
                Themes
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>default</DropdownItem>
                <DropdownItem>green</DropdownItem>
                <DropdownItem>pink</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Col>
        <Col span="4" style="text-align: center;">
          Reading Mode
          <i-switch v-model="messageMode" on-change="toggleMode"></i-switch>
        </Col>
      </Row>
    </Menu>
   <!--  <Row>
      <Col span="8">
        <Menu mode="horizontal" active-name="1" style="height: 100%;">
          <MenuItem name="1">
            <Icon type="chatbubbles"></Icon>
              Message
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people"></Icon>
              People
          </MenuItem>
        </Menu>
      </Col>
      <Col span="8"><Input icon="ios-clock-outline" style="width: 200px;"></Input></Col>
      <Col span="8">col-8</Col>
    </Row>  -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageMode: false
    }
  },
  methods: {
    toggleMode (status) {
      this.$Message.info('开关状态：' + status)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
}
</style>
