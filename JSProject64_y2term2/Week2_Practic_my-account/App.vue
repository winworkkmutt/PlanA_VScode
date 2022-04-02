<!-- WEEK2 
Topic: Chapter 2 - Vue Template Syntax
เมื่อต้องการดูตัวอย่างอันถัดไป ให้ comment ไว้
 -->


<!-- 1. vtext จะทำการเอาข้อความในตัวแปรส่วน script ไปแสดงในส่วนของ template -->
<!-- <script setup>
const counter = 'Hahahahahha This is test 123'
</script>

<template>
Counter:
<p v-text="counter"></p>
<p>{{ counter }}</p>
</template>

<style></style> -->



<!-- 2. vbind ใช้กับ HTML property โดยกำหนดค่าลงใน scriptได้ ซึ่งจะสามารถทำความเข้าใจว่าเป็น HTML property เมื่อเรียกผ่าน template ได้ -->
<!-- <script setup>
const imgPath = '../src/assets/logo.png'
const headingStyle = 'color:Green'
</script>

<template>
<h2 :style="headingStyle">Hello, Vue</h2>
<img :src="imgPath" alt="" srcset=""/>

<h2 v-bind:style="headingStyle">Hello, Vue</h2>
</template>

<style></style> -->



<!-- 3. v-html ใช้กับ HTML tag เพื่อตีความหมาย Message ที่ผสมกับ html tag ในส่วนของ Script ผ่านการเรียกใช้จาก templeteได้ ทำให้ -->
<!-- <script setup>
const rawHTML = '<h1><b><i>This should be bold and italic</i></b></h1>'
</script>

<template>
<p v-html="rawHTML"></p>
</template>

<style></style> -->



<!-- 3a. vshow ใช้คุมการแสดงผล โดยใช้ค่า boolean (True:แสดง False:ซ่อน )-->
<!-- <script setup>
const hide = false
const show = true
</script>

<template>
<p v-show="hide">Tom Hank</p>
<p v-show="show">Tom &JerryKiss</p>
</template>

<style></style> -->



<!-- 5. vif/velse/velseif ใช้เป็นเหมือนเงื่อนไข -->
<!-- <script setup>
const score = 70
</script>

<template>
<p v-if="score >= 80">Very Good</p>
<p v-else-if="score >= 70">Good</p>
<p v-else>Need Improvement</p>
</template>

<style></style> -->



<!-- 6. vfor ใช้สำหรับการทำ collection ซ้ำๆ แบบ ARRAY -->
<!-- <script setup>
  const myCourses = [
                          'Discrete Mathematics for Information Technology',
                          'Statistics for Information Technology',
                          'Applied Mathematic for data science',
                          'Programming Fundamental'
                        ]
</script>

<template>
  <ul >
    <li v-for="course in myCourses" :key="index">{{ course }}</li>
  </ul>
</template>

<style></style> -->



<!-- Practices :ทำโปรแกรมรายการสินค้า หากสินค้าใดติดลบจะแสดงเป็นสีแดง หากสินค้าใดเป็น 0 จะไม่นำมาแสดงผล -->
<script setup>
const moneyAccount = [{
                      name:'salary',
                      amount: 10000
                      },
                      {
                      name:'rent',
                      amount: -2500
                      },
                      {
                      name:'parking fee',
                      amount: 0
                      },
                      {
                      name:'carfule',
                      amount: -600
                      },
                      {
                      name:'commission',
                      amount: 5500
                      },
]
const show = true
</script>

<template>
  <h1>My Account</h1>
    <div v-for="(moneyAccount,index) in moneyAccount" :key="index">
      <div v-if="moneyAccount.amount < 0" style="color: red; ">
        <p>{{ moneyAccount.name }}</p> 
        <p>{{ moneyAccount.amount }}</p>
      </div>
      <div  v-else-if="moneyAccount.amount > 0" style="color: black;">
        <p>{{ moneyAccount.name }}</p> 
        <p>{{ moneyAccount.amount }}</p>
      </div>
      <div v-else-if="moneyAccount.amount == 0" v-show="fales">
        <p>{{ moneyAccount.name }}</p>
        <p>{{ moneyAccount.amount }}</p>
      </div>
        <div v-else style="color: black;">
        <p>{{ moneyAccount.name }}</p> 
        <p>{{ moneyAccount.amount }}</p>
      </div>
    </div>  
</template>

<style>
h1 {text-align: center;}
div {padding: 2%; border: 2px; background-color: honeydew;}
</style>
