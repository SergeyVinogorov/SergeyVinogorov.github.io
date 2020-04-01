<template>
  <footer>
    <div class="container is-fullhd">
      <div class="hero is-dark">
        <div class="hero-body">
          <div class="container is-widescreen">
            <div class="level footer-main">
              <div class="footer_wrapper-logo">
                <div class="footer__logo">
                  <img
                    src="../assets/iconmonstr-medium-1.svg"
                    alt="my medium not your"
                  />
                </div>

                <div class="level-left">
                  <div class="level-item">
                    <a href="/register">Get started</a>
                  </div>
                  <div class="level-item">
                    <a href="/register">Subscribe</a>
                  </div>
                  <div class="level-item">
                    <a href="/login">
                      <span class="footer__span--left">Have an account?</span>
                      Sign in
                    </a>
                  </div>
                </div>
                <div class="level-left">
                  <div class="level-item">
                    <a href="https://medium.com/about">About Medium</a>
                  </div>
                  <div class="level-item">
                    <a href="/register">Write</a>
                  </div>
                  <div class="level-item">
                    <a href="/login">
                      Gift
                    </a>
                  </div>
                  <div class="level-item">
                    <a href="/login">
                      Help
                    </a>
                  </div>
                  <div class="level-item">
                    <a href="/login">
                      Press Contacts
                    </a>
                  </div>
                  <div class="level-item">
                    <a href="/login">
                      Careers
                    </a>
                  </div>
                  <div class="level-item">
                    <a href="/login">
                      Legal
                    </a>
                  </div>
                </div>
                <div class="level-left">
                  <div class="level-item">
                    <span class="footer__span--left"
                      >© 2019, A Medium Corporation</span
                    >
                  </div>
                </div>
              </div>
              <div class="level-left footer__store">
                <div class="level-item">
                  <p>
                    Get the Medium App
                  </p>
                </div>
                <div>
                  <a
                    href="https://apps.apple.com/app/medium-everyones-stories/id828256236?mt=8ct%3Dlo_homepage&pt=698524&source=landing_home---------------------------"
                  >
                    <img
                      class="footer__img"
                      src="../assets/download-on-the-app-store-apple.svg"
                      alt="my medium app store app"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.medium.reader&source=landing_home---------------------------"
                  >
                    <img
                      class="footer__img footer__img-bigger"
                      src="../assets/google-play-download-android-app.svg"
                      alt="my medium google store app"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  padding: 30px;
  background-color: #363636;
}
.footer-main {
  a {
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
// .footer__wrapper-logo {
// 	dis
// }
.footer__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 35px;
  height: 35px;
  margin-bottom: 20px;
}
.footer__span--left {
  color: rgba(255, 255, 255, 0.6);
  margin-right: 5px;
}
.footer__store {
  flex-direction: column;
}
.footer__img {
  width: 135px;
  height: 38px;
  &-bigger {
    height: 41px;
  }
}
</style>
