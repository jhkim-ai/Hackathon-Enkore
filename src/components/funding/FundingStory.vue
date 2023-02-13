<template>
  <div>
    <div class="funding_story_img_div">
      <v-img
        :src="`https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAsUoU%2FbtrbkW7eo4L%2FZL9xiUfpEKutRZCyVMAq11%2Fimg.jpg`"
        :lazy-src="`https://picsum.photos/10/6?image=20`"
        aspect-ratio="1"
        cover
        class="grey lighten-4 rounded-xl funding_story_img"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="black lighten-5"
              class="progress_position"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
    
    <div class="funding_story_contents_area">
        <div class="schedule_area">
          <h2 style="display:inline;">[에스엠] 감사인 선임 저지를 통한 카리나 구하기</h2>
          <v-chip class="info_chip ml-2 mb-2" small color="#F5F5F5" text-color="#424242">
            <b>2022. 11. 29</b>
          </v-chip>
          <table class="schedule_info_table">
              <tr
                v-for="item in userInfo"
                :key="item.name"
              >
                <td class="schedule_table_key">{{ item.key }}</td>
                <td>: {{ item.value }}</td>
              </tr>
            </table>
            <br/>
            <p>
              (주)에스엠엔터테인먼트는(이하 SM) 주가 하락 방어, 적정 배당금 지급 등 주주의 권리를 침해하고 있습니다. 

SM은 최대 주주인 이수만 총괄 프로듀서의 개인 회사 &lt;라이크기획&gt;과 부당한 용역 계약을 맺어 주주 이익을 침탈하고 있습니다. 

SM의 주가는 지난 1년 간 6~7만원을 횡보하며 주주에게 큰 실망을 안겨주고 있습니다. AESPA, 레드벨벳, NCT 등 뛰어난 아티스트가 국내외 시장에서 맹활약을 하고 있음에도 불구하고, SM의 주가는 아티스트의 성공과 무관하게 박스권에 갇혀있습니다.

주가 부진의 핵심 요인은 SM의 기형적인 지배구조 때문입니다. ‘22년 상반기에도 여전히 114 억원(연결기준 영업이익 386억원의 30%)에 달하는 금액이 라이크기획에 대한 수수료로 지급됐으며, 상반기 연결 매출액이 SM의 38% 수준인 JYP 대비 영업이익, 시가총액 모두 뒤지고 있는 상황입니다.

주주들이 납득할 수 있는 수준의 합리적이고 구체적인 계획이 충분히 제시되지 못하는 경우, 문제가 합리적인 방향으로 개선될 때까지 주주로서의 다양한 법적 권리 행사를 포함해 다양한 조치를 단계적으로 실행해 나갈 것입니다.

            </p>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    
    data() {
        return {
          userInfo: [
            {
              key: "회사명",
              value: "주식회사 에스엠 엔터테인먼트"
            },
            {
              key: "대표이사",
              value: "이성수, 탁영준",
            },
            {
              key: "본점소재지",
              value: "서울특별시 성동구 왕십리로 83-21",
            },
            {
              key: "대표전화",
              value: "031-200-1114",
            },
//              {
//               key:(주)에스엠엔터테인먼트는(이하 SM) 주가 하락 방어, 적정 배당금 지급 등 주주의 권리를 침해하고 있습니다. 

// SM은 최대 주주인 이수만 총괄 프로듀서의 개인 회사 <라이크기획>과 부당한 용역 계약을 맺어 주주 이익을 침탈하고 있습니다. 

// SM의 주가는 지난 1년 간 6~7만원을 횡보하며 주주에게 큰 실망을 안겨주고 있습니다. AESPA, 레드벨벳, NCT 등 뛰어난 아티스트가 국내외 시장에서 맹활약을 하고 있음에도 불구하고, SM의 주가는 아티스트의 성공과 무관하게 박스권에 갇혀있습니다.

// 주가 부진의 핵심 요인은 SM의 기형적인 지배구조 때문입니다. ‘22년 상반기에도 여전히 114 억원(연결기준 영업이익 386억원의 30%)에 달하는 금액이 라이크기획에 대한 수수료로 지급됐으며, 상반기 연결 매출액이 SM의 38% 수준인 JYP 대비 영업이익, 시가총액 모두 뒤지고 있는 상황입니다.

// 주주들이 납득할 수 있는 수준의 합리적이고 구체적인 계획이 충분히 제시되지 못하는 경우, 문제가 합리적인 방향으로 개선될 때까지 주주로서의 다양한 법적 권리 행사를 포함해 다양한 조치를 단계적으로 실행해 나갈 것입니다.

//             },           

          ],
    
        }
    },
}
</script>

<style scoped>
 .progress_position {
    margin-top: 32%;
 }
 .funding_story_img_div {
    width: 100%;
    height: 400px;
 }
 .funding_story_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
 }
 .schedule_area {
  margin: 20px 0 0 0;
 }
 .schedule_info_table {
  border-collapse: separate;
  border-spacing: 0.5rem 0.5rem;
 }
 .schedule_table_key {
  letter-spacing: 1.2px;
 }
</style>
