<template>
  <Menu active-name="1" style="height: 100%;overflow-y: scroll;width: 200px;">
    <div style="padding: 20px 40px;position: relative;">
      <Button slot="default" type="primary" long style="height: 40px;font-size: 1em;padding-left: 30px;" size="large">compose</Button>
      <Icon type="compose" size=24 style="position: absolute;top: 28px;left: 50px;color: #FFF;"></Icon>
    </div>
    <!-- <MenuGroup title=""> -->
      <MenuItem name="1">
        <Icon type="ios-email-outline" size=24></Icon>
          Inbox
      <Badge class="badge" count="24546"></Badge>
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-star-outline" size=24></Icon>
          Starred
      </MenuItem>
      <MenuItem name="3">
        <Icon type="ios-heart-outline" size=24></Icon>
          Firstclass
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-information-outline" size=24></Icon>
          Thirdclass
      </MenuItem>
      <MenuItem name="5">
        <Icon type="ios-locked-outline" size=24></Icon>
          Spam
      </MenuItem>
      <MenuItem name="6">
        <Icon type="ios-ionic-outline" size=24></Icon>
          Trash
      </MenuItem>
      <MenuItem name="7">
        <Icon type="ios-world-outline" size=24></Icon>
          Sent
      </MenuItem>
      <MenuItem name="8">
        <Icon type="ios-paper-outline" size=24></Icon>
          Draft
      </MenuItem>
    <!-- </MenuGroup> -->
    <MenuGroup title="My Boxes">
      <MenuItem name="9">
        <Icon type="ios-filing-outline" size=24></Icon>
          用户留存
      </MenuItem>
      <MenuItem name="10">
        <Icon type="ios-filing-outline" size=24></Icon>
          流失用户
      </MenuItem>
      <MenuItem name="11">
        <Icon type="ios-filing-outline" size=24></Icon>
          流失用户
      </MenuItem>
      <MenuItem name="12">
        <Icon type="ios-filing-outline" size=24></Icon>
          流失用户
      </MenuItem>
      <MenuItem name="13">
        <Icon type="ios-filing-outline" size=24></Icon>
          流失用户
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge {
  position: absolute;
  right: 10px;
  top: 18px;
}
</style>
