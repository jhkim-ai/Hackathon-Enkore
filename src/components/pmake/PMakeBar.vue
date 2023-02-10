<template>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
        프로젝트 분야 설정
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
        요금제 선택
        </v-stepper-step>
  
        <v-divider>
        </v-divider>
  
        <v-stepper-step
          :complete="e1 > 3"
          step="3">
          프로젝트 정보 입력
        </v-stepper-step>

        <v-divider>
        </v-divider>

        <v-stepper-step step="4">
          프로젝트 생성 완료
        </v-stepper-step>
      </v-stepper-header>

      

      

  
      <v-stepper-items>
        <v-stepper-content step="1">
        
            <v-container class="con">
                <div class="whole">
                    <div class="HeadText1">프로젝트 분야를 설정해주세요</div>
                    <div class="text1">의결권 위임과 배당금 기부를 할 수 있습니다</div>
                    <div class="pic">
                        <div class="subpic">
                            <v-img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_DmMkNlcp_8b0dc2448f9048976a0ff91acfbeec8847b6253c_190x320.jpg">
                                <button class = "imbtn" @click="e1 = 2, p_type='의결권펀딩'">
                                <span class="imtext">
                                    의결권 위임
                                </span>
                                </button>
                            </v-img>
                        </div>
                        <div class="subpic">
                            <v-img src="http://fundingtogether.org/data/file/funding_cate/thumb-3551154630_IKuqEtXD_a9506dd80fc820206ac4956757a8fb30f684d721_190x320.jpg">
                                <button class = "imbtn" @click="e1 = 2, p_type='배당금기부'">
                                <span class="imtext">
                                    배당금 기부
                                </span>
                                </button>
                            </v-img>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-stepper-content>
  
        <v-stepper-content step="2">
        
          <v-container class="con">
                <div class="whole2">
                    <div class="HeadText1">요금제를 선택해주세요</div>
                    <div class="text2">프로젝트 생성을 위해서는 결제가 필요합니다</div>
                    <div class="pic">
                        <div class="subpic2">
                            <button class = "imbtn2" @click="e1 = 3, m_type='BASIC 요금제'">
                                <v-img src="./FeePic1.png">
                                </v-img>
                            </button>
                            
                        </div>
                        <div class="subpic2">
                            <button class = "imbtn2" @click="e1 = 3, m_type='STANDARD 요금제'">
                                <v-img src="./FeePic2.png">
                                </v-img>
                            </button>
                        </div>
                        <div class="subpic2">
                            <button class = "imbtn2" @click="e1 = 3, m_type='VIP 요금제'">
                                <v-img src="./FeePic3.png">
                                </v-img>
                            </button>
                        </div>
                    </div>
                </div>
            </v-container>

          <v-btn color="primary" @click="e1 = 1" text>
            뒤로 가기
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">

            <!--여기서 부터 3-->

            <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="warning">
        <strong class="subheading">{{ trip.name || '프로젝트 제목을 입력해주세요'}}</strong>

        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}.{{ new Date().getMonth() }}.{{ new Date().getDate() }} — <strong>{{p_type}}</strong> 프로젝트
        — <strong>{{ m_type }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>

            <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      <strong>기본정보 입력</strong>
      <small>프로젝트 생성을 위한 필수정보를 입력해주세요</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="white lighten-1"
        class="mb-12"
        elevation="0"
        outlined
        height="380px"
      >
    
      <!--step 3-1 내용(시작)-->
      <v-expansion-panels>
<v-expansion-panel>
<v-expansion-panel-header width="500" height="400">
<template v-slot:default="{ open }">
  <v-row no-gutters>
    <v-col cols="4">
      <strong>프로젝트 제목</strong>
    </v-col>
    <v-col
      cols="8"
      class="text--secondary"
    >
      <v-fade-transition leave-absolute>
        <span
          v-if="open"
          key="0"
        >
          프로젝트 제목을 입력해주세요
        </span>
        <span
          v-else
          key="1"
        >
          {{ trip.name }}
        </span>
      </v-fade-transition>
    </v-col>
  </v-row>
</template>
</v-expansion-panel-header>
<v-expansion-panel-content>
<v-text-field
  v-model="trip.name"
  placeholder="(예시) [SM감사인 선임 저지] 감사인 선임 저지를 통한 카리나 구하기"
></v-text-field>
</v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel>
    <v-expansion-panel-header width="500" height="400">
<template v-slot:default="{ open }">
  <v-row no-gutters>
    <v-col cols="4">
      <strong>프로젝트 개요</strong>
    </v-col>
    <v-col
      cols="8"
      class="text--secondary"
    >
      <v-fade-transition leave-absolute>
        <span
          v-if="open"
          key="0"
        >
          프로젝트 개요를 입력해주세요
        </span>
        <span
          v-else
          key="1"
        >
          {{ trip.content1 }}
        </span>
      </v-fade-transition>
    </v-col>
  </v-row>
</template>
</v-expansion-panel-header>
<v-expansion-panel-content>
<v-text-field
  v-model="trip.content1"
  placeholder="(예시) 여러분이 주신 한표 한표 힘받아 주주총회가 될 수 있도록 보여드리겠습니다.
  이번 주주총회에서 감사인 선임 결사 반대를 통해 카리나와 주주가 행복한 SM을 만들겠습니다!"
></v-text-field>
</v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel>
<v-expansion-panel-header v-slot="{ open }">
<v-row no-gutters>
  <v-col cols="4">
    <strong>개시 및 종료 일자</strong>
  </v-col>
  <v-col
    cols="8"
    class="text--secondary"
  >
    <v-fade-transition leave-absolute>
      <span v-if="open">프로젝트 개시 및 종료 일자를 설정해주세요</span>
      <v-row
        v-else
        no-gutters
        style="width: 100%"
      >
        <v-col cols="6">
          개시 일자: {{ trip.start || '미설정' }}
        </v-col>
        <v-col cols="6">
          종료 일자: {{ trip.end || '미설정' }}
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-col>
</v-row>
</v-expansion-panel-header>
<v-expansion-panel-content>
<v-row
  justify="space-around"
  no-gutters
>
  <v-col cols="3">
    <v-menu
      ref="startMenu"
      :close-on-content-click="false"
      :return-value.sync="trip.start"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="trip.start"
          label="개시 일자"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="$refs.startMenu.isActive = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.startMenu.save(date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
  </v-col>

<v-col cols="3">
    <v-menu
      ref="endMenu"
      :close-on-content-click="false"
      :return-value.sync="trip.end"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="trip.end"
          label="종료 일자"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="$refs.endMenu.isActive = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.endMenu.save(date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
  </v-col>
</v-row>
</v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel>
    <v-expansion-panel-header width="500" height="400">
        <template v-slot:default="{ open }">
  <v-row no-gutters>
    <v-col cols="4">
        <strong>의제 찬반여부</strong>
    </v-col>
    <v-col
      cols="8"
      class="text--secondary"
    >
      <v-fade-transition leave-absolute>
        <span
          v-if="open"
          key="0"
        >
          생성할 프로젝트와 관련된 의제 찬반여부를 선택해주세요.
        </span>
        <span
          v-else
          key="1"
        >
          {{ radios }}
        </span>
      </v-fade-transition>
    </v-col>
  </v-row>
</template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
    <v-radio-group v-model="radios">
      <v-radio value="의제 찬성">
        <template v-slot:label>
          <div>프로젝트 주제에 대해 <strong class="success--text">찬성합니다</strong></div>
        </template>
      </v-radio>
      <v-radio value="의제 반대">
        <template v-slot:label>
          <div>프로젝트 주제에 대해 <strong class="primary--text">반대합니다</strong></div>
        </template>
      </v-radio>
    </v-radio-group>
</v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel>
<v-expansion-panel-header width="500" height="400">
<template v-slot:default="{ open }">
  <v-row no-gutters>
    <v-col cols="4">
      <strong>{{ p_type }} 목표치</strong>
    </v-col>
    <v-col
      cols="8"
      class="text--secondary"
    >
      <v-fade-transition leave-absolute>
        <span
          v-if="open"
          key="0"
        >
          {{ p_type }} 성공에 필요한 목표치를 설정해주세요(단위: 주)
        </span>
        <span
          v-else
          key="1"
        >
          {{ target_num || '프로젝트 결성에 필요한 최소 필요 주식을 입력해주세요'}}(단위 : 주)
        </span>
      </v-fade-transition>
    </v-col>
  </v-row>
</template>
</v-expansion-panel-header>
<v-expansion-panel-content>
    <v-row>
      <v-col cols="4">
        <v-subheader><strong>목표치(단위: 주)</strong></v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-model="target_num"
          label="필요한 주식을 입력해주세요(단위:주)"
          value=300
          suffix="주"
        ></v-text-field>
      </v-col>
    </v-row>
</v-expansion-panel-content>
</v-expansion-panel>

</v-expansion-panels>


      <!--step 3-1 내용(끝)-->
    
    </v-card>
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        기본정보 입력완료
      </v-btn>
    </v-stepper-content>


    <!--3-2 시작-->
    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      <strong>스토리 작성</strong>
      <small>프로젝트 메인페이지에 들어갈 내용을 작성해주세요</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      
      <v-card>
    <v-toolbar
      flat
      color="orange lighten-1"
      dark
    >
      <v-toolbar-title>
        프로젝트 명 : {{trip.name || '프로젝트 제목을 입력해주세요'}}
    </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        filled
        label="스토리 제목"
        value="(예시)SM감사인 선임저지"
      ></v-text-field>

      <v-text-field
        filled
        label="스토리 부제목"
        value="(예시)감사인 선임 저지를 통해 카리나를 구해주세요!"
      ></v-text-field>

      <v-file-input
        label="스토리 메인 사진"
        filled
        prepend-icon="mdi-camera"
    ></v-file-input>

      <v-textarea
        filled
        height="400"
        label="스토리 내용"
        value="
(예시)(주)에스엠엔터테인먼트(이하 SM)는 주가 하락 방어, 적정 배당금 지급 등 주주의 권리를 침해하고 있습니다.

SM은 최대 주주인 이수만 총괄 프로듀서의 개인 회사 <라이크 기획>과 부당한 용역 계약을 맺어 주주 이익을 침탈하고 있습니다.
SM의 주가는 지난 1년간 6~7만원을 횡보하며 주주에게 큰 실망을 안겨주고 있습니다. AESPA, 레드벨벳, NCT 등 뛰어난 아티스트가 국내외 시장에서 맹활약을 하고 있음에도 불구하고, SM의 주가는 아티스트의 성공과 무관하게 박스권에 갇혀있습니다.
        
주가 부진의 핵심 요인은 SM의 기형적인 지배구조 때문입니다. 2022년 상반기에도 여전히 114억 원(연결기준 영업이익 386억 원의 30%)에 달하는 금액이 라이크기획에 대한 수수료로 지급됐으며, 상반기 연결 매출액이 SM의 38% 수준인 JYP 대비 영업이익, 시가총액 모두 뒤지고 있는 상황입니다.
          
주주들이 납득할 수 있는 수준의 합리적이고 구체적인 계획이 충분히 제시되지 못하는 경우, 문제가 합리적인 방향으로 개선될 때까지 주주로서의 다양한 법적 권리 행사를 포함해 다양한 조치를 단계적으로 실행해 나갈 것입니다.
        "
      ></v-textarea>

    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        depressed
        @click="e6 = 3"
      >
        스토리 작성 완료
      </v-btn>
      <v-btn
        color="grey ligthen-2"
        depressed
        @click="e6 = 1"
      >
        뒤로 가기
      </v-btn>
    </v-card-actions>
  </v-card>
    
    </v-stepper-content>


    <!--3-2 끝!!-->
    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      <strong>서포터 작성</strong>
      <small>프로젝트를 주최하는 단체 혹은 개인의 상세 정보를 작성해주세요</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      
        <v-card>
    <v-toolbar
      flat
      color="orange lighten-1"
      dark
    >
      <v-toolbar-title>
        프로젝트 명 : {{trip.name || '프로젝트 제목을 입력해주세요'}}
    </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
        <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="company"
            :rules="companyRules"
            :counter="30"
            label="소속"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="주최자명"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>


        <v-form v-model="valid">
    <v-container>
      <v-row>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="연락처"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="homepage"
            :rules="homepageRules"
            label="홈페이지"
            required
          ></v-text-field>
        </v-col>

        
      </v-row>
    </v-container>
  </v-form>

      <v-file-input
        label="서포터 사진"
        filled
        prepend-icon="mdi-camera"
    ></v-file-input>

      <v-textarea
        filled
        height="400"
        label="서포터 설명"
        value="
(예시)얼라인파트너스는 2021년 서울에 설립된 투자회사로서, 글로벌 선도 사모펀드 (“Private Equity”) 운용사와 투자은행 (“Investment Bank”)에서 다년간의 성공적인 경영권 바이아웃 (Buyout) 투자, 피투자기업 경영과 가치증대, 다양한 M&A자문 경험을 쌓고 한국 시장에 대한 깊은 이해와 탄탄한 네트워크를 보유한 투자 전문가들로 구성되어 있습니다.

얼라인파트너스는 피투자기업에서의 지속가능한 가치 창출을 추구합니다. 이를 위해서 다양한 이해관계자들의 이해가 같은 방향으로 조화롭게 일치 (“aligned”)되는 상황을 만드는 것이 매우 중요하다고 믿으며, 기업에 대한 깊은 이해와 전문성을 바탕으로 각 기업의 상황에 맞는 창의적인 솔루션을 제시함으로써 이를 달성하고자 합니다.

얼라인파트너스는 글로벌 선도 Private Equity 운용사와 Investment Bank에서의 투자 경험과 네트워크 등을 바탕으로 차별화된 시각으로 투자대상 기업에 대한 심도 깊은 분석을 시행하고, 이를 바탕으로 높은 확신을 가지게 된 기업들에 장기 투자합니다. 또한 투자 집행 이후 피투자기업의 경영진 및 이해관계자들과의 파트너십을 바탕으로 Private Equity 방법론을 활용한 value-add 활동을 전개하여 피투자기업의 성장을 지원하고 잠재된 가치가 최대한 발현되도록 돕습니다.
        "
      ></v-textarea>

    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <div class v-if="p_type=='배당금기부'">
      <v-btn
        color="success"
        depressed
        @click="e1 = 4"
      >
        최종 작성 완료
      </v-btn>
      <v-btn
        color="grey ligthen-2"
        depressed
        @click="e6 = 2"
      >
        뒤로 가기
      </v-btn>
      </div>
      <div class v-if="p_type=='의결권펀딩'">
      <v-btn
        color="success"
        depressed
        @click="e6 = 4"
      >
        스토리 작성 완료
      </v-btn>
      <v-btn
        color="grey ligthen-2"
        depressed
        @click="e6 = 2"
      >
        뒤로 가기
      </v-btn>
      </div>
    </v-card-actions>
  </v-card>

    </v-stepper-content>

    <!--3-4 작성 시작-->

    <v-stepper-step
      :complete="e6 > 4"
      step="4"
    >
      <strong>의안 작성</strong>
      <small>(의결권 펀딩 프로젝트인 경우에만) 주주총회 의안과 찬반여부를 작성해주세요</small>
    </v-stepper-step>

    <v-stepper-content step="4">
      
        <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>의결권 위임 주주총회 안건</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              안건 추가하기
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                취소하기
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                수정하기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

    </v-stepper-content>

    <!--4-3 작성 끝-->


  </v-stepper>

  <!--여기까지 3 끝-->
        </v-stepper-content>
  
        <v-stepper-content step="4">

            <v-container class="con">
                <div class="whole4">
                    <v-row justify="space-around">
                        <span class="group pa-2">
                        <v-icon x-large color="orange" :elevation="8">
                            mdi-folder-plus
                        </v-icon>
                    </span>
                    </v-row>

                    <div class="custom-style-1"></div>
                    <h3 class="mb-3 text-lg-h6">{{p_type}} 프로젝트가 생성되었습니다.</h3><strong></strong>
                    <p class="overflow-x-visible orange lighten-5">
                        프로젝트명 : {{ trip.name }}
                    </p>

                    <div class="custom-style-1"></div>
                    <v-row align="center" justify="space-around">
                        <a href="/fund">
                        <v-btn>의결권 펀딩 바로가기</v-btn>
                        </a>
                        <a href="/donate">
                        <v-btn>배당금 기부 바로가기</v-btn>
                        </a>
                    </v-row>
                </div>
            </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </template>


<script>


  export default {
    data () {
        return {
        e1: 1,
        s1: 1,
        e6: 1,
        items: [
          { title: '기본정보 입력', icon: 'mdi-view-dashboard', action:"test1", click(){console.log('test')}, s1:1},
          { title: '스토리 입력', icon: 'mdi-pencil', action:"test2", s1:2},
          { title: '서포터 입력', icon: 'mdi-account', action:"test3", s1:3},
        ],
        p_type: 0,
        m_type: 0,
        right: null,
        date: null,
        radios: '의제 찬성여부를 선택해주세요',
        target_num: null,
      trip: {
        name: '',
        content1: '',
        location: null,
        start: null,
        end: null,
      },
      valid: false,
      firstname: '',
      nameRules: [
        v => !!v || '주최자명 입력은 필수입니다.',
        v => v.length <= 10 || '이름은 10자리 이하만 가능합니다.',
      ],
      company: '',
      companyRules: [
        v => !!v || '소속 입력은 필수입니다.',
        v => v.length <= 30 || '소속명은 30자리 이하만 가능합니다.',
      ],
      email: '',
      emailRules: [
        v => !!v || '이메일 입력은 필수입니다.',
        v => /.+@.+/.test(v) || '이메일 형식이어야합니다. (ex. mjbaik@koscom.com)',
      ],
      phone: '',
      phoneRules:[
        v => !!v || '전화번호 입력은 필수입니다.',
      ],
      homepage: '',
      homepageRules:[
        v => !!v || '홈페이지 주소 입력은 필수입니다.',
      ],
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '의안',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '찬반여부', value: 'calories' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: '찬성',
      },
      defaultItem: {
        name: '',
        calories: '찬성',
      },
      }
      
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: '(예시) 제52기 정기주주총회 소집결정의 건',
            calories: '찬성',
          },
          {
            name: '(예시) 제52기 정기주주총회 회의 목적사항 결정의 건',
            calories: '반대',
          },
          {
            name: '(예시) 2021년 사회공헌 매칭기금 운영계획 승인의 건',
            calories: '반대',
          },
          {
            name: '(예시) 삼성 준법감시위원회 설치 및 운영에 관한 협약 및 규정 개정의 건',
            calories: '반대',
          },
          {
            name: '(예시) 학교법인 충남삼성학원 기부금 출연의 건',
            calories: '찬성',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },

  }

</script>

<style scoped>

.con{
    padding:200px auto;
}

.subpic{
    position: relative;
}

.subpic2{
    position: relative;
}

.imtext{
    position:absolute;
    top:300px;
    left:50px;
    z-index:1;
    color:white;
    font-size:18px;
    width:120px;
    font-weight: bold;
}

.imbtn{
    color:orange;
    width:220px;
    height: 370px;
}

.imbtn2{
    color:orange;
    width:240px;
    height: 320px;
}

.whole{
    width: 500px;
    height: 500px;
    margin:0 auto;
}

.whole2{
    width: 800px;
    height: 500px;
    margin:0 auto;
}

.whole4{
    width: 800px;
    height: 600px;
    margin:0 auto;
    margin-top:300 auto;
}

.custom-style-1{
    height: 20px;
}


div{
    text-align: center;
}

.pic{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap:15px;
}

img{
    width: 150px;
    height: 200px;
}

.HeadText1{
    margin:5px 0;
    font-size:30px;
    color:tomato;
    font-weight: bold;
}


.text1{
    margin:20px 0;
}

.text2{
    margin:20px;
    margin-bottom: 50px;
}

.v-enter-active, .v-leave-active{
    transition:0.5s;
}

.v-leave-to{
    opacity:0;
    transform: translate(20px);
}

</style>