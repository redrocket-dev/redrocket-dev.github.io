<template>
  <footer>
    <div class="footer_container">
      <div class="footer_inner">
        <div class="pane">
          <div class="footer_title">(주)레드로켓</div>
          <ul class="footer_content">
            <li>서울시 마포구 화양로 26 204호</li>
            <li>사업자번호:</li>
            <li>전화:</li>
            <li>팩스:</li>
          </ul>
        </div>
        <div class="pane">
          <div class="footer_title">서비스</div>
          <ul class="footer_content">
            <li>
              <a href="https://campusfund.net/">캠퍼스펀드 WEB</a>
            </li>
            <li>
              <a href="https://blog.naver.com/campusfund">캠퍼스펀드 블로그</a>
            </li>
          </ul>
        </div>
        <div class="pane">
          <div class="footer_title">문의</div>
          <ul class="footer_content">
            <li>
              <a href="#">서비스</a>
            </li>
            <li>
              <a href="#">채용</a>
            </li>
            <li>
              <a href="#">제휴</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
footer {
  background-color: #131313;
  min-height: 25rem;
  color: #fff;
  padding: 20px;
  @media screen and (max-width: 600px) {
    padding: 3rem 0;
  }
  .footer_container {
    width: 84%;
    height: 80%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    .footer_inner {
      width: 75%;
      max-width: 1080px;
      margin: 0 auto;
      display: flex;
      margin-top: 5%;
      @media screen and (max-width: 600px) {
        height: 100%;
        margin-top: 0;
        flex-wrap: wrap;
      }
      justify-content: space-between;
      align-items: flex-start;
      .pane {
        min-width: 190px;
        @media screen and (max-width: 600px) {
          height: unset;
          width: 100%;
          &:not(:first-of-type) {
            margin-top: 20px;
          }
        }
        /* width: 30%; */
        height: 60%;
        .footer_title {
          font-weight: 600;
          font-size: 0.875rem;
        }
        ul.footer_content {
          list-style-type: none;
          padding: 0;
          font-size: 0.75rem;
          a {
            text-decoration: none;
            color: #fff;
            &:hover {
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
}
</style>
