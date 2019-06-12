<template>
  <div id="campusfund">
    <div class="section background-orange">
      <div class="section_title">
        <h1 class="title">꿈을 위해 열심히 달려온 사람들은</h1>
        <h1 class="title">더 좋은 금융을 누릴 자격이 있습니다.</h1>
        <h1 class="title">그래서 우린 캠퍼스펀드를 만들었습니다.</h1>
      </div>
      <!-- <div class="rocket">
        <img src="../assets/rocket.svg" alt="rocket">
      </div>-->
    </div>
    <div class="section">
      <div class="section_title">
        <h1 class="title">고객의 대출이력이나 소득을 넘어선 가능성을 심사합니다.</h1>
        <p class="content">지금까지 살아오면서 성취한 학력/학점 등 기존 회사들이 반영하지 않는 광범위한 데이터로 평가받습니다.</p>
        <p class="content">대출이 증가하며 데이터들이 축적되고 이를 바탕으로 정확하게 학생들의 미래상환능력을 판단합니다.</p>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        <h1 class="title">캠퍼스펀드는 새로운 재테크 대안입니다.</h1>
        <p class="content">초저금리 시대에 재테크로 수익을 내는 것은 쉽지 않습니다.</p>
        <p class="content">캠퍼스펀드는 평균 10% 내외의 중금리 수익을 낼 수 있는 투자상품을 제공합니다.</p>
        <p class="content">저평가된 학생들만 엄선하여 대출 신청을 받기 때문에 리스크 대비 높은 수익률을 확보하실 수 있습니다.</p>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        <h1 class="title">캠퍼스펀드는 사회적 가치를 창출합니다.</h1>
        <p class="content">상환 능력이 우수함에도 규제와 시스템으로 인해 가치를 인정 받지 못하는 최고의 학생들을 대상으로 합니다.</p>
        <p class="content">미래를 이끌어갈 학생들에게 낮은 금리의 대출을 통해 자신에게 더 많은 투자를 할 수 있도록 도와줍니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#campusfund {
  position: relative;
  .section {
    min-height: calc(50vh - 40px);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    &.background-orange {
      background-color: #f8b500;
    }
    .section_title {
      width: 84%;
      padding: 6rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
  .title {
    width: 75%;
    max-width: 1080px;
    margin: 0 auto;
    font-size: 40px;
    font-weight: 200;
    letter-spacing: -2.5px;
    line-height: 1.3;
  }
  .content {
    width: 75%;
    max-width: 1080px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 200;
    line-height: 1.3;
    &:first-of-type {
      margin-top: 20px;
    }
  }
}
</style>
