<template>
  <div class="background">
    <div class="background">
      <div
        class="font-bold text-5xl text-center shadow-xl bg-size-auto headertext p-3"
      >
        SELF-ORGANISED FITNESS TRAINING FORM
      </div>
      <center>
        <br />
        <div class="text-2xl font-bold underline contacts">
          Essential Contact Numbers:
        </div>
        <div class="contacts">SBN HQ Ops Room: 6477 2296</div>
        <div class="contacts">Activation of Emergency Response: 1733</div>
        <div class="contacts">
          Army Lightning Risk Update (Telegram Chat): https://t.me/ArmyCAT1
        </div>
      </center>
      <form class="viewBox">
        <label class="font-bold pr-2">Rank:</label>
        <select class="rounded-md" id="1" required v-model="rank">
          <option v-for="rank in ranks" :key="rank">
            {{ rank }}
          </option>
        </select>
        <pre></pre>
        <br />

        <div style="display:flex">
          <label class="font-bold pr-2" for="2">Name:</label>
          <input
            class="rounded-md"
            type="text"
            id="2"
            required
            v-model="name"
          />
        </div>

        <br />
        <div style="display:flex">
          <label class="font-bold pr-2" for="3">Phone:</label>
          <input
            class="rounded-md"
            type="number"
            id="3"
            required
            v-model="phone"
          />
        </div>
        <br />
        <label class="font-bold pr-2">PES Status:</label>
        <select class="rounded-md" id="12" required v-model="pes">
          <option v-for="pes in peses" :key="pes">
            {{ pes }}
          </option>
        </select>
        <pre></pre>


        <br />
        <label class="font-bold pr-2">Unit:</label>
        <select class="rounded-md" id="4" required v-model="unit">
          <option v-for="unit in units" :key="unit">
            {{ unit }}
          </option>
        </select>
        <pre></pre>
        <br />

        <label class="font-bold pr-2">Cluster/Coy:</label>
        <select class="rounded-md" id="4" required v-model="cluster">
          <option v-for="cluster in clusters" :key="cluster">
            {{ cluster }}
          </option>
        </select>
        <pre></pre>
        <br />

        <label class="font-bold pr-2">Branch:</label>
        <select class="rounded-md" id="5" required v-model="subunit">
          <option v-for="subunit in subunits" :key="subunit">
            {{ subunit }}
          </option>
        </select>
        <pre></pre>
        <br />
        <div style="display:flex">
        <label class="font-bold flex-none pr-2">Camp Of SFT:</label>
        <select
          id="6"
          required
          v-model="camp"
          class="bg-white-500 font-mono rounded-md"
        >
          <option v-for="camp in camps" :key="camp">
            {{ camp }}
          </option>
        </select>
        </div>
        <pre></pre>
        <br/>
        <div style="display:flex">
          <label class="font-bold pr-2"> Date: </label>
          <input
            class="rounded-md"
            id="7"
            type="date"
            v-model="date"
            required
          />
        </div>
        <br />
        <div class="flex">
          <label class="font-bold flex-none pr-2">Start Time: </label>
          <input
            class="rounded-md flex-1"
            id="8"
            type="time"
            v-model="starttime"
            required
          />
        </div>
        <br />
        <div class="flex">
          <label class="font-bold flex-none pr-2">Estimated End Time:</label>
          <input
            class="rounded-md flex-1"
            id="9"
            type="time"
            v-model="estimatedendtime"
            required
          />
        </div>

        <br />
        <label class="font-bold pr-2">Rank & Name of Superior:</label>
        <select class="rounded-md" id="10" required v-model="superior">
          <option v-for="superior in superiors" :key="superior">
            {{ superior }}
          </option>
        </select>
        <div class="terms">
          <label class="font-bold pr-2" for="11">Superior Informed?</label>
          <input
            class="rounded-md"
            id="11"
            type="checkbox"
            v-model="terms"
            @change="
              questionnaireDisplay = !questionnaireDisplay;
              superiorinformed = !superiorinformed;
            "
            required
          />
        </div>
        <router-view />
      </form>
    </div>
    <br />
    <!-- Questionnaire -->
    <div v-if="questionnaireDisplay == true" class="background">
      <h1
        class=" font-bold text-3xl text-center shadow-xl headertext bg-size-auto"
      >
        GET ACTIVE QUESTIONNAIRE
      </h1>
      <br />
      <div id="form">
        <table class="MyTable">
          <tr class="headertext underline">
            <th style="width:5%;">S/N</th>
            <th style="width:65%;">Question</th>
            <th style="width:15%;">Yes</th>
            <th style="width:15%;">No</th>
          </tr>

          <tr
            v-for="(questionData, index) in questionnaireData"
            :key="questionData"
          >
            <td class="text-center">
              {{ questionData.SN }}
            </td>
            <td style="white-space: pre-line;">
              {{ questionData.question }}
            </td>
            <td style="height:1px;">
              <div
                class="check-button check-button-green"
                :id="'QQ' + (index + 1) + '_YES'"
                @click="onQuestionnaireButtonClick(index, true, false)"
              ></div>
            </td>
            <td style="height:1px;">
              <div
                class="check-button check-button-red"
                :id="'QQ' + (index + 1) + '_NO'"
                @click="onQuestionnaireButtonClick(index, false, true)"
              ></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <br />

    <!-- Checklist -->
    <div
      v-if="checklistDisplay == true && questionnaireDisplay == true"
      class="background"
    >
      <h1
        class="font-bold text-3xl text-center shadow-xl headertext bg-size-auto"
      >
        Pre-Activity Checklist
      </h1>
      <br />
      <div id="form">
        <table class="MyTable">
          <tr>
            <th style="width:15%;" class="headertext">HEART</th>
            <th style="width:65%;" class="headertext">Description:</th>
            <th style="width:10%;" class="headertext">Yes</th>
            <th style="width:10%;" class="headertext">No</th>
          </tr>

          <tr v-for="(checkList, index) in checklistData" :key="checkList">
            <td class="text-center">
              {{ checkList.SN }}
            </td>
            <td style="white-space: pre-line;">
              {{ checkList.question }}
            </td>
            <td style="height:1px;">
              <div
                class="check-button check-button-green"
                :id="'QC' + (index + 1) + '_YES'"
                @click="onCheckListButtonClick(index, true, false)"
              ></div>
            </td>
            <td style="height:1px;">
              <div
                class="check-button check-button-red"
                :id="'QC' + (index + 1) + '_NO'"
                @click="onCheckListButtonClick(index, false, true)"
              ></div>
              <!-- <input type="radio" :id="'QC'+(index+1)+'_NO'" :name="'QC'+(index+1)" value="NO" @click="onCheckListButtonClick(index, false, true);"> No -->
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div
      class="submit headertext"
      v-if="showSubmitButton == true"
      style="margin: 0; height: auto; width: 100%; display:flex; justify-content:center;"
    >
      <button @click.prevent="onSubmitButtonClick()" class="font-bold">
        Submit
      </button>
    </div>
    <br />
    <center>
      <div class="text-2xl font-bold underline contacts">
        Essential Contact Numbers:
      </div>
      <div class="contacts">SBN HQ Ops Room: 6477 2296</div>
      <div class="contacts">Activation of Emergency Response: 1733</div>
      <div class="contacts">
        Army Lightning Risk Update (Telegram Chat): https://t.me/ArmyCAT1
      </div>
      <br />
      <br />
      <br />
    </center>
  </div>
</template>

<script setup>
import { questionnaireData, checklistData } from "../data.js";
import { ref, computed } from "vue";
import { superiorlist } from "../apis/SuperiorListApi";
import { useRouter } from "vue-router";

const questionnaireDisplay = ref(false);
const checklistDisplay = ref(false);
const showSubmitButton = ref(false);
const ranks = ref([
  "REC",
  "PTE",
  "LCP",
  "CPL",
  "CFC",
  "SCT",
  "3SG",
  "2SG",
  "1SG",
  "SSG",
  "MSG",
  "3WO",
  "2WO",
  "1WO",
  "MWO",
  "SWO",
  "CWO",
  "OCT",
  "2LT",
  "LTA",
  "CPT",
  "MAJ",
  "LTC",
  "SLTC",
  "COL",
]);
const camps = ref([
  "Nee Soon",
  "Nee Soon Dri Clad",
  "Amoy Quee",
  "Mandai Hill",
  "Khatib",
  "Sembawang",
  "Seletar",
  "Dieppe Barracks",
]);
const rank = ref();
const name = ref();
const phone = ref();
const units = ref(["SBN"]);
const unit = ref();
const cluster = ref();
const subunit = ref();
const camp = ref();
const date = ref();
const starttime = ref();
const estimatedendtime = ref();
const endtime = ref("");
const superior = ref();
const superiorinformed = ref(false);
const router = useRouter();
const peses = ref(["A", "B1", "B2", "B3", "B4", "C2", "C9", "E1", "E9"]);
const pes = ref();

const clusters = computed(() => {
  let compiledClusters = [];
  if (unit.value) {
    compiledClusters = new Set(
      superiorlist
        .filter((superior) => superior.unit === unit.value)
        .map((superior) => superior.cluster)
    );
  }
  return compiledClusters;
});
const subunits = computed(() => {
  let compiledsubunits = [];
  if (cluster.value) {
    compiledsubunits = new Set(
      superiorlist
        .filter((superior) => superior.cluster === cluster.value)
        .map((superior) => superior.subunit)
    );
  }
  return compiledsubunits;
});
const superiors = computed(() => {
  let compiledsuperiors = [];
  if (cluster.value) {
    compiledsuperiors = new Set(
      superiorlist
        .filter((superior) => superior.cluster === cluster.value)
        .map((superior) => superior.name)
    );
  }
  return compiledsuperiors;
});
var teleID = computed(() => {
  if (superior.value) {
    teleID = superiorlist
      .filter((comd) => comd.name === superior.value)
      .map((comd) => comd.comdTeleID);
  }
  return teleID;
});

const onQuestionnaireButtonClick = (i, yesClicked, noClicked) => {
  questionnaireData[i].yesChecked = yesClicked;
  questionnaireData[i].noChecked = noClicked;

  var yesIndex = "QQ" + (i + 1) + "_YES";
  var noIndex = "QQ" + (i + 1) + "_NO";

  if (yesClicked) {
    document.getElementById(yesIndex).style.background = "green";
    document.getElementById(noIndex).style.removeProperty("background");
  } else if (noClicked) {
    document.getElementById(noIndex).style.background = "red";
    document.getElementById(yesIndex).style.removeProperty("background");
  }

  var allQuestionnaireAnswered = true;
  for (var j = 0; j < questionnaireData.length; j++) {
    if (!(questionnaireData[j].yesChecked || questionnaireData[j].noChecked)) {
      allQuestionnaireAnswered = false;
      break;
    }
  }
  if (allQuestionnaireAnswered && !checklistDisplay.value) {
    checklistDisplay.value = true;
  }
};

const onCheckListButtonClick = (i, yesClicked, noClicked) => {
  checklistData[i].yesChecked = yesClicked;
  checklistData[i].noChecked = noClicked;

  var yesIndex = "QC" + (i + 1) + "_YES";
  var noIndex = "QC" + (i + 1) + "_NO";

  if (yesClicked) {
    document.getElementById(yesIndex).style.background = "green";
    document.getElementById(noIndex).style.removeProperty("background");
  } else if (noClicked) {
    document.getElementById(noIndex).style.background = "red";
    document.getElementById(yesIndex).style.removeProperty("background");
  }

  var allCheckListAnswered = true;
  for (var j = 0; j < checklistData.length; j++) {
    if (!(checklistData[j].yesChecked || checklistData[j].noChecked)) {
      allCheckListAnswered = false;
      break;
    }
  }
  if (allCheckListAnswered && !showSubmitButton.value) {
    showSubmitButton.value = true;
  }
};

const onSubmitButtonClick = async () => {
  // check Sign Up Form
  let submitError = false;
  for (var i = 1; i <= 11; i++) {
    if (!document.getElementById("" + i).value) {
      alert("There Is An Empty Field.");
      return;
    }
  }

  var startTimeStr = document.getElementById("8").value;
  var endTimeStr = document.getElementById("9").value;

  var timeError = false;
  if (
    parseInt(endTimeStr.split(":")[0]) < parseInt(startTimeStr.split(":")[0])
  ) {
    timeError = true;
  } else if (
    parseInt(endTimeStr.split(":")[0]) == parseInt(startTimeStr.split(":")[0])
  ) {
    if (
      parseInt(endTimeStr.split(":")[1]) <= parseInt(startTimeStr.split(":")[1])
    ) {
      timeError = true;
    }
  }
  if (timeError) {
    alert("Start Time Should Be Before End Time.");
    return;
  }
  if (pes.value == "C2" || pes.value == "C9" || pes.value == "E1" || pes.value == "E9") {
    alert("You Are Not PES Fit For SFT")
    return;
  }

  // check Questionnaire
  for (i = 0; i < questionnaireData.length; i++) {
    if (questionnaireData[i].correctAns != 2) {
      if (
        questionnaireData[i].yesChecked &&
        questionnaireData[i].correctAns == 0
      ) {
        alert("There Is An Incorrect Response In The Questionnaire.");
        return;
      }
      if (
        questionnaireData[i].noChecked &&
        questionnaireData[i].correctAns == 1
      ) {
        alert("There Is An Incorrect Response In The Questionnaire.");
        return;
      }
    }
  }

  // check Checklist
  for (i = 0; i < checklistData.length; i++) {
    if (checklistData[i].correctAns != 2) {
      if (checklistData[i].yesChecked && checklistData[i].correctAns == 0) {
        alert("There Is An Incorrect Response In The Checklist.");
        return;
      }
      if (checklistData[i].noChecked && checklistData[i].correctAns == 1) {
        alert("There Is An Incorrect Response In The Checklist.");
        return;
      }
    }
  }
  let mobilestring = phone.value.toString()
    let mobilelength = mobilestring.length
  if (mobilelength != 8) {
      alert("The Mobile Number You Have Entered Is Incorrect.")
      console.log(mobilelength)
      return;
  }
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  if (d < 10) d = "0" + d;
  if (m < 10) m = "0" + m;
  let now = y + "-" + m + "-" + d;
  if (date.value < now) {
    alert("The Dates Are Invalid.");
    console.log(now, this.loanstart);
    return;
  }
  console.log(
    rank.value,
    name.value,
    phone.value,
    unit.value,
    cluster.value,
    subunit.value,
    camp.value,
    date.value,
    starttime.value,
    estimatedendtime.value,
    endtime.value,
    superior.value,
    superiorinformed.value,
    pes.value
  );
  //insert api and post to backend//
  const res = await fetch(`https://sbnttinfobot.xyz/sftapi/submission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rank: rank.value,
      name: name.value,
      mobile: phone.value,
      pesstatus: pes.value,
      unit: unit.value,
      cluster: cluster.value,
      subunit: subunit.value,
      camp: camp.value,
      date: date.value,
      starttime: starttime.value,
      estimatedendtime: estimatedendtime.value,
      superior: superior.value,
      endtime: endtime.value,
      comdTeleID: teleID.value[0],
    }),
  });
  const data = await res.json();
  console.log(data.id);
  router.push("/SubmitSuccess?id=" + data.id);
  if (data != "") {
    this.submitError = false;
    router.push("/SubmitSuccess?id=" + data.id);
  } else {
    this.submitError = true;
  }
  return now, submitError;
};
</script>

<style>
form{
    max-width:1000px;
    margin:30px auto;
    margin-bottom: 0 !important;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label select {
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    border:2px solid;
}
input  {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color:#555
}
input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
button:not(:hover){
    background: rgb(219, 216, 227);
    border: 2px solid;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px;
    color:rgb(42, 36, 56);
}
button:hover{
    background: #5C5470;
     border: 2px solid;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px;
    color:rgb(219, 216, 227);
    cursor:pointer;
}
.submit{
    text-align: center;
}
#form{
    display:flex;
    justify-content: center;
}
.MyTable {
            width: 100%;
            border: 1px solid rgba(20, 1, 1, 0.521);
            border-collapse: collapse;
            align-content: center;
            border-radius: 5px;
        }
        .MyTable th {
            margin:0;
            background-color: rgb(92,84,112);
            border: 1px solid rgba(20, 1, 1, 0.521);
            text-align: center;
            font-weight: bold;
            border-radius: 5px;
        }
        .MyTable td {
            /* padding:12px !important; */
            background-color: rgb(219, 216, 227);
            border: 1px solid rgb(0, 14, 0);
            border-radius: 5px;
        }
        .submit{
    text-align: center;
        }
.check-button{
    height: 100%;
    width: 100%;
}
.check-button-green:hover{
    background: lightgreen;
}
.check-button-red:hover{
    background: lightcoral;
}
.background {
    background-color: rgb(42, 36, 56)
}
.headertext {
    background-color: rgb(42, 36, 56);
    color: rgb(219, 216, 227)
}
.contacts {
    color: rgb(219, 216, 227)
}
.viewBox {
    background-color: rgb(219, 216, 227);
}
/* .MyTable {
            width: 100%;
            border: 1px solid black;
            border-collapse: collapse;
        }
        .MyTable th {
            margin:0;
            padding: 12px 0;
            background-color:greenyellow;
            border: 1px solid rgb(20, 1, 1);
            text-align: center;
            font-weight: bold;
        }
        .MyTable td {
            padding:12px !important;
            border: 1px solid rgb(0, 14, 0);
        } */

</style>
