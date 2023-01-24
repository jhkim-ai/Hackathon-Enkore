<template>
  <div>
    <div class="funding_story_img_div">
      <v-img
        :src="`https://picsum.photos/500/300?image=20`"
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
          <h2 style="display:inline;">주주총회소집공고</h2>
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
              value: "삼성전자주식회사"
            },
            {
              key: "대표이사",
              value: "한종희",
            },
            {
              key: "본점소재지",
              value: "경기도 수원시 영통구 삼성로 129 (매탄동)",
            },
            {
              key: "대표전화",
              value: "031-200-1114",
            },
            {
              key: "작성책임자",
              value: "김동욱 재경팀장",
            },
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
