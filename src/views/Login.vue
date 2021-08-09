<template>
  <div class="home">
    <Message v-if="toggleMsg" @hide="hideMe" :msg="msg" />
    <section>
      <div class="box">
        <div class="square" style="--i: 0"></div>
        <div class="square" style="--i: 1"></div>
        <div class="square" style="--i: 2"></div>
        <div class="square" style="--i: 3"></div>
        <div class="square" style="--i: 4"></div>
        <div class="square" style="--i: 5"></div>

        <div class="container">
          <div class="form">
            <h2>LOGIN</h2>
            <form @submit.prevent="login">
              <div class="inputBx">
                <input type="email" v-model="email" required />
                <span>Email</span>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/709/709699.svg"
                  alt="email"
                />
              </div>
              <div class="inputBx password">
                <input
                  id="password-input"
                  type="password"
                  v-model="password"
                  required
                />
                <span>Password</span>
                <a
                  href="#"
                  class="password-control"
                  @click="show_hide_password(this)"
                ></a>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1828/1828471.svg"
                  alt="lock"
                />
              </div>
              <label class="remember"><input type="checkbox" /> Remember</label>
              <div class="inputBx">
                <input type="submit" value="Log in" />
              </div>
            </form>
            <!-- <p>Forgot password? <a href="#">Click Here</a></p> -->
            <p>Don't have an account <a href="/register">Sign up</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from "@/components/Message.vue";

export default {
  name: "Login",
  components: {
    Message,
  },
  data(){
    return{
      toggleMsg:false,
      msg:''
    }
  },
  methods: {
    hideMe(){
      this.toggleMsg = false
    },
    show_hide_password(target) {
      var input = document.getElementById("password-input");
      if (input.getAttribute("type") == "password") {
        target.classList.add("view");
        input.setAttribute("type", "text");
      } else {
        target.classList.remove("view");
        input.setAttribute("type", "password");
      }
      return false;
    },

    async login() {
      const res = await fetch("http://localhost/Atlastrip_Backend/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          password: this.password, //done
          email: this.email,//done
        }),
      });
      const result = await res.json();
      // console.log(result);
      if(result.error != 'true'){
      const Token = result.Token;
      let User = JSON.stringify(result.User);
      localStorage.setItem("token", Token);
      localStorage.setItem("user", User);
      this.$router.push("/");
      }else{
        this.toggleMsg = true
        this.msg = result.message;
      }
      return result;
    }
  },
  mounted(){
    localStorage.removeItem('salutation')
  }
};
</script>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css2?family=El+Messiri:wght@700&display=swap");



.home {
  background: #031323;
  overflow: hidden;
}

img {
  width: 32px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #62ee52, #088506, #2b5300, #00ff3c);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.box {
  position: relative;

  .square {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    animation: square 10s linear infinite;
    animation-delay: calc(-1s * var(--i));
  }

  @keyframes square {
    0%,
    100% {
      transform: translateY(-20px);
    }

    50% {
      transform: translateY(20px);
    }
  }

  .square:nth-child(1) {
    width: 100px;
    height: 100px;
    top: -15px;
    right: -45px;
  }

  .square:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 105px;
    left: -125px;
    z-index: 2;
  }

  .square:nth-child(3) {
    width: 60px;
    height: 60px;
    bottom: 85px;
    right: -45px;
    z-index: 2;
  }

  .square:nth-child(4) {
    width: 50px;
    height: 50px;
    bottom: 35px;
    left: -95px;
  }

  .square:nth-child(5) {
    width: 50px;
    height: 50px;
    top: -15px;
    left: -25px;
  }

  .square:nth-child(6) {
    width: 85px;
    height: 85px;
    top: 165px;
    right: -155px;
    z-index: 2;
  }
}

.container {
  position: relative;
  padding: 50px;
  width: 300px;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
}

.container::after {
  content: "";
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 5px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 2%
  );
}

.form {
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }

@media (max-width: 768px) {
  .container{
    width: 300px;
  .inputBx {
    input {
      width: 100%;
    }
  }
  }
}


  .inputBx {
    position: relative;
    width: 100%;
    margin-bottom: 20px;

    input {
      width: 100%;
      outline: none;
      border: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 10px;
      padding-left: 40px;
      border-radius: 15px;
      color: #fff;
      font-size: 16px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .password-control {
      position: absolute;
      top: 11px;
      right: 10px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
      transition: 0.5s;
    }

    .view {
      background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
      transition: 0.5s;
    }

    img {
      position: absolute;
      top: 6px;
      left: 8px;
      transform: scale(0.6);
      filter: invert(1);
    }

    input[type="submit"] {
      background: #fff;
      color: #111;
      max-width: 100px;
      padding: 8px 10px;
      box-shadow: none;
      letter-spacing: 1px;
      cursor: pointer;
      transition: 1.5s;
    }

    input[type="submit"]:hover {
      background: linear-gradient(
        115deg,
        rgba(0, 0, 0, 0.1),
        rgba(255, 255, 255, 0.25)
      );
      color: #fff;
      transition: 0.5s;
    }

    input::placeholder {
      color: #fff;
    }

    span {
      position: absolute;
      left: 30px;
      padding: 10px;
      display: inline-block;
      color: #fff;
      transition: 0.5s;
      pointer-events: none;
    }

    input:focus ~ span,
    input:valid ~ span {
      transform: translateX(-30px) translateY(-25px);
      font-size: 12px;
    }
  }

  p {
    color: #fff;
    font-size: 15px;
    margin-top: 5px;

    a {
      color: #fff;
    }

    a:hover {
      background-color: #000;
      background-image: linear-gradient(to right, #434343 0%, black 100%);
      --webkit-background-clip: text;
      --webkit-text-fill-color: transparent;
    }
  }
}

.remember {
  position: relative;
  display: inline-block;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
