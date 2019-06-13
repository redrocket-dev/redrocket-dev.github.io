<template>
  <div id="career">
    <div class="section">
      <div class="section_title">
        <h1 class="title">우리는 이렇게 일합니다.</h1>
        <p class="content list">
          <span>🚀</span>
          <span>팀원별로 하나의 프로젝트를 주도적으로 맡아 이에 대한 성과를 매 주 측정합니다.</span>
        </p>
        <p class="content list">
          <span>🚀</span>
          <span>각자의 전문성과 의견을 존중하며 합리적이고 열정적인 토론 문화를 지향합니다.</span>
        </p>
        <p class="content list">
          <span>🚀</span>
          <span>자기계발이 팀의 역량으로 이어진다고 믿기에 개인의 발전에 투자를 아끼지 않습니다.</span>
        </p>
      </div>
    </div>
    <div class="section background-red">
      <div class="section_title">
        <h1 class="title">곧 날아오를 로켓에 타기까지</h1>
        <h1 class="title">단 한 발자국 남았습니다.</h1>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        <h1 class="title">진행 중인 채용공고</h1>
        <div class="content">
          <ul class="recruits">
            <div v-for="(recruit, index) in recruits" :key="index">
              <li class="recruit" @click="closeAndOpen(index)">
                <span>{{ recruit.type }}</span>
                <img
                  :class="{reversed: recruit.open}"
                  src="../assets/down_arrow.svg"
                  alt="more"
                  width="15"
                >
              </li>
              <div class="recruit_content" v-if="recruit.open" v-html="recruit.content"></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      recruits: [
        {
          type: "프론트엔드 개발자",
          content: `<h4>자격요건</h4>
                    <ul>
                      <li>HTML, CSS, JavaScript 에 능숙하신 분</li>
                      <li>UI / UX에 대해 높은 가치를 두시는 분</li>
                      <li>React, Vue, Angular 중 1개 이상의 라이브러리 / 프레임워크 사용 가능하신 분</li>
                      <li>REST API 클라이언트 개발 경험이 있으신 분</li>
                      <li>기획자, 디자이너 등을 포함한 동료들과 적극적으로 소통하시는 분 </li>
                      <li>더 나은 기술을 새롭게 배우고 익히는 것을 즐기시는 분</li>
                    </ul>
                    <h4>우대사항</h4>
                    <ul>
                      <li>실무에서 SPA 프로젝트를 경험해보신 분</li>
                      <li>MVC, MVVM 등 프레젠테이션 패턴에 대해 고민 해보신 분</li>
                      <li>반응형 디자인, 웹 접근성 및 표준을 고려한 UI 개발을 하시는 분</li>
                      <li>핀테크 생태계와 경제, 투자 등에 관심이 있으신 분</li>
                    </ul>
                    <h4>참고사항</h4>
                    <ul>
                      <li>레드로켓의 근무자는 현재 대부분 20대이며 근무 인원이 적은 회사입니다.</li> 
                      <li>휴가는 연 25일까지 사유 불문 사용 가능하고, 중식도 제공이 됩니다. </li> 
                      <li>필요하신 전자기기, 서적, 인터넷 강의 비용 등은 아낌없이 지원하고 있습니다.</li> 
                      <li>급여는 높지 않지만, 회사가 성장하는만큼 충분히 보상하려고 노력하고 있습니다.</li> 
                      <li>마음이 맞아 장기 근무를 할 경우 스톡옵션도 제공하고 있습니다.</li>
                    </ul>`,
          open: false
        },
        {
          type: "서버 개발자",
          content: `<h4>주요업무</h4>
                    <ul>
                      <li>캠퍼스펀드 웹과 앱의API 신규 개발 및 유지보수</li>
                      <li>캠퍼스펀드의 다양한 데이터를 활용한 서비스 백엔드 개발</li>
                    </ul>
                    <h4>자격요건</h4>
                    <ul>
                      <li>RDBMS와 데이터구조, 기본적인 알고리즘에 대한 이해가 있으신 분</li>
                      <li>리눅스 환경에서의 개발 및 서버 운영 경험이 있으신 분</li>
                      <li>Node.js, Ruby on Rails 등을 활용한 웹 백엔드 구현 경험이있으신분</li>
                      <li>기획자, 디자이너 등을 포함한 동료들과 적극적으로 소통하시는 분</li>
                      <li>더 나은 기술을 새롭게 배우고 익히는 것을 즐기시는 분</li>
                    </ul>
                    <h4>우대사항</h4>
                    <ul>
                      <li>더 나은 아키텍쳐와 클린 코드를 추구하시는 분</li>
                      <li>SQL 최적화에 관심을 가지고 있거나 실제로 경험이 있으신 분</li>
                      <li>Docker / Kubernetes를 활용한 서비스 배포 경험이 있으신분</li>
                      <li>AWS 등 클라우드 환경에서 서비스 운영 경험이 있으신 분</li>
                      <li>Hadoop 기반 데이터 파이프라인 구축경험이 있으신 분</li>
                      <li>핀테크 생태계와 경제, 투자 등에 관심이 있으신 분</li>
                    </ul>
                    <h4>참고사항</h4>
                    <ul>
                      <li>레드로켓의 근무자는 현재 대부분 20대이며 근무 인원이 적은 회사입니다.</li>
                      <li>휴가는 연 25일까지 사유 불문 사용 가능하고, 중식도 제공이 됩니다.</li>
                      <li>필요하신 전자기기, 서적, 인터넷 강의 비용 등은 아낌 없이 지원하고 있습니다.</li>
                      <li>급여는 높지 않지만, 회사가 성장하는만큼 충분히 보상하려고 노력하고 있습니다.</li>
                      <li>마음이 맞아 장기 근무를 할 경우 스톡옵션도 제공하고 있습니다.</li>
                    </ul>`,
          open: false
        }
        // {
        //   type: "iOS 개발자",
        //   content: ``,
        //   open: false
        // }
      ]
    };
  },
  methods: {
    closeAndOpen(index) {
      this.recruits[index].open = !this.recruits[index].open;
    }
  }
};
</script>


<style lang="scss" scoped>
#career {
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
    &.list {
      display: flex;
      align-items: flex-start;
      line-height: 1.5;
      padding: 0.5rem 0;
      span:first-of-type {
        padding-right: 5px;
      }
    }
    &:first-of-type {
      margin-top: 20px;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 16px;
    }
    .recruits {
      padding-left: 0;
      .recruit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        padding: 1.5rem 0;
        font-weight: 500;
        border-bottom: 1px solid #ddd;
        img.reversed {
          transform: scale(1, -1);
        }
      }
      .recruit_content {
        font-size: 1rem;
        padding-bottom: 4rem;
        h4 {
          font-weight: 500;
          margin: 2rem 0 1rem;
        }
        ul {
          padding-left: 3%;
        }
      }
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
