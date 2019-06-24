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
          <div v-for="member in members" class="member" :key="member.name">
            <img :src="member.img">
            <h4>{{ member.name }}</h4>
            <h5>{{ member.role }}</h5>
            <a
              class="more_btn"
              @click="member.desc_more = !member.desc_more"
            >{{member.desc_more ? '접기' : "자세히"}}</a>
            <div v-if="member.desc_more" class="member__desc">{{ member.desc }}</div>
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
export default {
  data() {
    return {
      members: [
        {
          name: "박태홍",
          img: require("../assets/taehong.jpeg"),
          role: "CEO",
          desc_more: false,
          desc:
            "태홍님은 캠퍼스펀드에서 대표의 업무를 맡고 있습니다. 레드로켓이 핀테크 기업으로써 지속해서 성장할 수 있도록 끊임없이 고민하는 역할을 하고 있습니다. 이전에는 에듀캐스트 마케팅 담당으로 활동을 하며 경험을 쌓았으며, 스쿠터홀릭을 창업한 경험이 있습니다. 스토리투자라는 유튜브 채널도 운영 중입니다."
        },
        {
          name: "최우형",
          img: require("../assets/uhyung.jpeg"),
          role: "Managing Director",
          desc_more: false,
          desc:
            "레드로켓의 정신적 지주이자 전략을 담당하고 있는 우형님입니다. 대학생 때 컴퓨터와 벤처학을 공부한 것을 바탕으로 레드로켓의 전반적인 사업과 IT 부문 양쪽에서의 전략을 견인하고 있습니다."
        },
        {
          name: "안운장",
          img: require("../assets/profile-placeholder.jpg"),
          role: "Web Developer",
          desc_more: false,
          desc:
            "운장님은 캠퍼스펀드 개발팀에서 고객과 비즈니스를 이어주는 플랫폼을 개발하고 있습니다. 이전에는 멋쟁이사자처럼이라는 프로그래밍 교육단체에서 3년간 CS 비전공자 학생들과 직장인들을 교육했으며, (주)드리머리에서 프론트엔드 개발을 맡았습니다."
        },
        {
          name: "윤충환",
          img: require("../assets/chunghwan.jpeg"),
          role: "Credit Model Developer",
          desc_more: false,
          desc:
            "충환님은 캠퍼스펀드 개발팀에서 다양한 데이터를 분석하고 활용하여 금융 서비스를 제공하고 있습니다. 또한 신용 모델 개발을 통해 캠퍼스펀드의 대출채권과 투자가 수익률이 높고 안정적인 금융서비스가 될 수 있도록 합니다."
        },
        {
          name: "배다현",
          img: require("../assets/dahyun.jpeg"),
          role: "Content Creator",
          desc_more: false,
          desc:
            "다현님은 캠퍼스펀드에서 콘텐츠 마케팅과 브랜딩 업무를 맡고 있습니다. 복잡한 금융상품에 대한 고객의 이해를 돕고, P2P금융의 가치와 기술을 보다 쉽고 매력적으로 전달하기 위해 노력하고 있습니다. 캠퍼스펀드 이전에는 광고대행사에서 다양한 콘텐츠 마케팅과 디지털마케팅을 진행하며 경험을 쌓았으며, 롯데푸드, 종근당건강 등의 소셜 콘텐츠 제작자로 업무를 수행했습니다."
        },
        {
          name: "김지하",
          img: require("../assets/jiha.jpeg"),
          role: "Growth Marketer",
          desc_more: false,
          desc:
            "지하님은 캠퍼스펀드 마케팅 전략을 담당하고 있습니다. 그로스해킹을 이용하여 각종 마케팅이 효율적으로 집행될 수 있도록 하고 있으며, 고객 맞춤형 전략을 통해 캠퍼스펀드 서비스가 필요한 고객에게 더 가까워질 수 있도록 하고 있습니다."
        },
        {
          name: "김혜미",
          img: require("../assets/hyemi.jpeg"),
          role: "Customer Officer",
          desc_more: false,
          desc:
            "혜미님은 캠퍼스펀드에서 고객응대 및 운영을 맡고 있습니다. 고객이 편리하게 서비스를 이용할 수 있도록 서비스 전반에 대해 쉽고 간단하게 안내해드리고 있습니다. 캠퍼스펀드 이전에는 신한은행에서 근무하며 금융권 경험을 쌓았으며 창구에서 직접 고객을 응대하며 CS, VOC 관리에 대한 전문성을 쌓았습니다."
        },
        {
          name: "박수민",
          img: require("../assets/soomin.jpeg"),
          role: "Customer Officer",
          desc_more: false,
          desc:
            "수민님은 캠퍼스펀드 운영팀에서 내외부적으로 캠퍼스펀드가 효율적으로 운영될 수 있도록 다양한 서비스를 제공하고 있습니다. 보다 신속하고 정확한 서비스 제공을 위해 운영 고도화에 주력하고 있습니다."
        }
      ]
    };
  }
};
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
      .member__desc {
        width: 80%;
        margin-top: 0.5rem;
        font-size: 0.75rem;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
