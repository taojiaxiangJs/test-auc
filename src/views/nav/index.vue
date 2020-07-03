<template>
    <div>
        <div class="app-header">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="SpinfoLogo" />
            </div>
            <div class="navs">
                <ul>
                    <template v-for="(v, i) in navs">
                        <li v-if="v.location !== 'right'" :key="i" :class="{ active: v.key === current }" @click="changeNav(v.key)">{{ v.val}}</li>
                    </template>
                </ul>
            </div>
            <div class="navs navs-right">
                <ul>
                    <template v-for="(v, i) in navs">
                        <template v-if="v.location === 'right'">
                            <li v-if="v.key === 'adminu'" :key="i" :class="{ active: v.key === current }">
                                <el-dropdown>
                                    <span class="el-dropdown-nav">
                                        <i class="el-icon-user-solid"></i> {{ username }}
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item><span @click="editPassword=true">修改密码</span></el-dropdown-item>
                                        <el-dropdown-item divided><span style="display:block;" @click="logout">退出登录</span></el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </li>
                            <li v-else :key="i" :class="{ active: v.key === current }" @click="changeNav(v.key)">{{ v.val }}</li>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
        <router-view />

        <div class="edit-password-modal" v-if="editPassword">
            <div class="password-contanier">
                <div class="header">
                   <span>修改密码</span> 
                   <i class="el-icon-close icon"  @click="editPassword=false"></i>
                </div>
                <p>
                    <span class="label">原密码：</span> 
                    <el-input ref="oldPassword" :type="type1" v-model="passwordInfo.oldPassword" size="large" placeholder="输入原密码"  @blur="verifyFn('username')"  style="width:380px"></el-input>
				    <img v-if="type1 == 'password'" @click="type1 = 'text'" class="eyeicon" src="../../assets/img/eyeclose.png" alt="">
                    <img v-else class="eyeicon" @click="type1 = 'password'" src="../../assets/img/eyeopen.png" alt="">
                </p>
                <p>
                    <span class="label">新密码：</span> 
                    <el-input ref="newPassword" :type="type2" v-model="passwordInfo.newPassword" size="large" placeholder="输入新密码"  @blur="verifyFn('username')" style="width:380px"></el-input>
                    <img v-if="type2 == 'password'" @click="type2 = 'text'" class="eyeicon" src="../../assets/img/eyeclose.png" alt="">
                    <img v-else class="eyeicon" @click="type2 = 'password'" src="../../assets/img/eyeopen.png" alt="">
                </p>
                <p>
                    <span class="label">确认新密码：</span> 
                    <el-input ref="newPassword1" :type="type3" v-model="newPassword" size="large" placeholder="再次输入新密"  @blur="verifyFn('username')" style="width:380px"></el-input>
                    <img v-if="type3 == 'password'" @click="type3 = 'text'" class="eyeicon" src="../../assets/img/eyeclose.png" alt="">
                    <img v-else class="eyeicon" @click="type3 = 'password'" src="../../assets/img/eyeopen.png" alt="">
                </p>
                <el-button style="margin-left:162px" type="primary" @click="save">确 定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { serverUrl } from '@/setting'
export default {
    computed:{
        ...mapState({
            navs: state => state.nav.data,
            current: state => state.nav.current,
            username: state => state.user.name
        })
    },
    data(){
        return {
            editPassword: false,
            newPassword:'',
            type1: 'password',
            type2: 'password',
            type3: 'password',
            passwordInfo: {
                oldPassword: '',
                newPassword: '',
            }
        }
    },
    methods:{
        changeNav(key){
            this.$store.commit('nav/SET_CURRENT',key)
            this.$router.push({name:key})
        },
        async logout(){
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.path}`)
        },
        save(){
            if(!this.passwordInfo.oldPassword){
                this.$message.error('请输入原密码！')
                return
            }
            if(!this.passwordInfo.newPassword){
                this.$message.error('请输入新密码！')
                return
            }
            if(!this.newPassword){
                this.$message.error('请再次输入新密码！')
                return
            }
            if(this.passwordInfo.newPassword !== this.newPassword){
                this.$message.error('两次输入的新密码不一致！请重新输入')
                return
            }
            // this.$ajax.post(serverUrl.editPasswordUrl, this.passwordInfo).then(res => {
                this.$message({
                    message: '密码修改成功！',
                    type: 'success'
                })
                this.editPassword = false
            // })
        }
    },
};
</script>

<style lang="less" scoped>
.app-header {
    width: 100%;
    height: 60px;
    background: #020214;
    .logo {
        width: 160px;
        height: 60px;
        float: left;
        background: #e51c22;
        border-bottom-right-radius: 20px;
        text-align: center;
        line-height: 60px;
        img {
            width: 102px;
            vertical-align: middle;
        }
    }
     .navs {
      float: left;
      ul {
        margin: 0;
        li {
          font-size: 12px;
          float: left;
          list-style: none;
          margin: 0;
          padding: 0 15px;
          cursor: pointer;
          color: rgba(185, 201, 221, 1);
          line-height: 60px;
          
        }
        .active {
            background-color: rgb(4, 30, 95);
            color: #fff;
          }
      }
    }
    .navs-right {
      float: right;
    }
    .el-dropdown-nav {
        color: #b9c9dd;
    }

    .active .el-dropdown-nav {
        color: #fff;
    }
}
.edit-password-modal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0, .3);
    opacity: 1;
    .password-contanier{
        background: #fff;
        width: 600px;
        height: 400px;
        margin: 200px auto 0;
        .header{
            margin-top: 0;
            margin-bottom: 40px;
            padding: 18px 20px;
            font-size: 16px;
            font-weight: 500;
            border-bottom: 1px solid #e6ebf5;
            .icon{
                float: right;
                margin-top: 3px;
            }
        }
        p{
            text-align: center;
            margin: 0 0 26px;
            position: relative;
        }
        .label{
            display: inline-block;
            width: 100px;
            line-height: 40px;
            text-align: right;
            font-size: 16px;
        }
        .eyeicon{
            position: absolute;
            right: 70px;
            top: 11px;
            width: 20px;
            color:#C0C4CC;
        }
    }
}
</style>