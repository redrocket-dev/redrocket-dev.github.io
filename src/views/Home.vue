<template>
  <div id="home">
    <div class="section background-red">
      <div class="section_title">
        <h1 class="title">안녕하세요, 레드로켓입니다.</h1>
        <h1 class="title">우리는 기술의 혁신을 통한</h1>
        <h1 class="title">더 쉬운 금융 서비스를 만듭니다.</h1>
      </div>
      <!-- <div class="rocket">
        <img src="../assets/rocket.svg" alt="rocket">
      </div>-->
    </div>
    <div class="section">
      <div class="section_title">
        <h1 class="title">Rocket Your Asset</h1>
        <p class="content">레드로켓은 고객의 투자 수익률이 높이 솟구칠 수 있도록 하기 위해 설립되었습니다.</p>
        <p class="content">고도화된 데이터 분석능력으로 저평가된 기회를 발굴하여 상대적으로 높은 수익률을 제공하고 있습니다.</p>
        <p class="content">또한 업무 자동화를 통해 비용을 절감하고 이를 통해 실현한 수익을 투자자의 혜택으로 돌려드리고 있습니다.</p>
      </div>
    </div>
    <div class="section background-orange">
      <div class="section_title">
        <h1 class="title">대학생을 위한 크라우드펀딩</h1>
        <h1 class="title">캠퍼스펀드를 만듭니다.</h1>
        <p class="content">누적 거래액 26억을 달성하였으며 다양한 프로젝트를 준비하며 세계로 뻗어나갈 기반을 마련하고 있습니다.</p>
        <p class="content">스타트업 엑셀러레이터 프라이머, 글로벌 벤처캐피탈 스트롱벤처스와 함께합니다.</p>
        <p class="content">
          <router-link to="/campusfund#campusfund" class="read_more">더 알아보기</router-link>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        <h1 class="title">레드로켓 팀을 소개합니다.</h1>
        <div class="members">
          <div class="member">
            <img src="https://via.placeholder.com/180x240">
            <h4>박태홍</h4>
            <h5>CEO</h5>
            <a class="more_btn">자세히</a>
          </div>
          <div class="member">
            <img src="../assets/woonjang.jpg">
            <h4>안운장</h4>
            <h5>Web Developer</h5>
            <a class="more_btn">자세히</a>
          </div>
          <div class="member">
            <img src="../assets/chunghwan.jpg">
            <h4>윤충환</h4>
            <h5>Credit Model Developer</h5>
            <a class="more_btn">자세히</a>
          </div>
          <div class="member">
            <img src="../assets/dahyun.jpg">
            <h4>배다현</h4>
            <h5>Content Creator</h5>
            <a class="more_btn">자세히</a>
          </div>
          <div class="member">
            <img src="https://via.placeholder.com/180x240">
            <h4>김지하</h4>
            <h5>Growth Marketer</h5>
            <a class="more_btn">자세히</a>
          </div>
          <div class="member">
            <img src="https://via.placeholder.com/180x240">
            <h4>김혜미</h4>
            <h5>Customer Officer</h5>
            <a class="more_btn">자세히</a>
          </div>
          <div class="member">
            <img src="../assets/soomin.jpg">
            <h4>박수민</h4>
            <h5>Customer Officer</h5>
            <a class="more_btn">자세히</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section background-red">
      <div class="section_title">
        <h1 class="title">멋지게 날아오를 로켓에 함께 하실</h1>
        <h1 class="title">열정 넘치는 팀원들을 구합니다.</h1>
        <p class="content">문은 언제든 열려있습니다!</p>
        <p class="content">
          <router-link to="/career" class="read_more">함께하기</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#home {
  color: #131313;
  position: relative;
  .section {
    min-height: calc(50vh - 40px);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    &.background-red {
      background-color: #ad2427;
      color: #fff;
    }
    &.background-black {
      background-color: #131313;
      color: #fff;
    }
    &.background-orange {
      background-color: #f8b500;
    }
    @media screen and (max-width: 600px) {
      min-height: unset;
    }
    .section_title {
      width: 84%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        padding: 2rem 0;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 6rem 0;
      a.read_more {
        display: inline-block;
        border: 1px solid #131313;
        padding: 0.5rem 2rem;
        margin: 2rem 0;
        background-color: #131313;
        color: #fff;
        text-decoration: none;
        &:hover {
          opacity: 0.6;
        }
        @media screen and (max-width: 600px) {
          margin: 1rem 0;
        }
      }
    }
  }
  .title {
    width: 75%;
    max-width: 1080px;
    margin: 0 auto;
    font-size: 40px;
    font-weight: 200;
    letter-spacing: -2px;
    line-height: 1.3;
    word-break: keep-all;
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 23px;
    }
  }
  .subtitle {
    width: 75%;
    max-width: 1080px;
    margin: 0 auto;
    font-size: 25px;
    font-weight: 200;
  }
  .content {
    width: 75%;
    display: block;
    max-width: 1080px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 200;
    line-height: 1.3;
    word-break: keep-all;
    &:first-of-type {
      margin-top: 20px;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 16px;
    }
  }
  .rocket {
    display: flex;
    align-items: center;
    width: 300px;
    position: relative;
    right: 10%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .members {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    max-width: 1080px;
    margin: 0 auto 20px;
    @media screen and (max-width: 600px) {
      width: 90%;
      justify-content: space-between;
    }
    .member {
      padding: 20px 20px 20px 0;
      width: 24%;
      @media screen and (max-width: 1024px) {
        width: 33%;
      }
      @media screen and (max-width: 600px) {
        width: 47%;
        padding: 20px 0;
      }
      img {
        width: 80%;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        margin-bottom: 5px;
      }
      h4,
      h5 {
        margin: 0;
      }
      a {
        border: none;
        text-decoration: underline;
        font-size: 0.75rem;
        padding: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
