<script setup>
import { ref } from 'vue';

const equipmentData = {
  default: {
    head: `
        <rect x="117" y="48" width="7" height="7" fill="black" />
        <rect x="34" y="7" width="21" height="7" fill="black" />
        <rect x="19" y="14" width="15" height="7" fill="black" />
        <rect x="6" y="21" width="13" height="7" fill="black" />
        <rect x="6" y="28" width="6" height="7" fill="black" />
        <rect y="35" width="6" height="35" fill="black" />
        <rect x="6" y="70" width="6" height="27" fill="black" />
        <rect
          x="19"
          y="91"
          width="6"
          height="7"
          transform="rotate(90 19 91)"
          fill="black"
        />
        <rect
          x="20"
          y="97"
          width="7"
          height="7"
          transform="rotate(90 20 97)"
          fill="black"
        />
        <rect
          x="40"
          y="105"
          width="6"
          height="6"
          transform="rotate(90 40 105)"
          fill="black"
        />
        <rect
          x="34"
          y="83"
          width="15"
          height="6"
          transform="rotate(90 34 83)"
          fill="black"
        />
        <rect
          x="40"
          y="63"
          width="20"
          height="6"
          transform="rotate(90 40 63)"
          fill="black"
        />
        <rect
          x="47"
          y="63"
          width="6"
          height="7"
          transform="rotate(90 47 63)"
          fill="black"
        />
        <rect
          x="47"
          y="56"
          width="7"
          height="6"
          transform="rotate(90 47 56)"
          fill="black"
        />
        <rect
          x="54"
          y="56"
          width="6"
          height="7"
          transform="rotate(90 54 56)"
          fill="black"
        />
        <rect
          x="54"
          y="49"
          width="7"
          height="7"
          transform="rotate(90 54 49)"
          fill="black"
        />
        <rect
          x="61"
          y="49"
          width="6"
          height="7"
          transform="rotate(90 61 49)"
          fill="black"
        />
        <rect
          x="61"
          y="42"
          width="7"
          height="6"
          transform="rotate(90 61 42)"
          fill="black"
        />
        <rect
          x="69"
          y="42"
          width="6"
          height="8"
          transform="rotate(90 69 42)"
          fill="black"
        />
        <rect
          x="89"
          y="35"
          width="7"
          height="20"
          transform="rotate(90 89 35)"
          fill="black"
        />
        <rect
          x="96"
          y="42"
          width="7"
          height="13"
          transform="rotate(90 96 42)"
          fill="black"
        />
        <rect
          x="103"
          y="49"
          width="6"
          height="13"
          transform="rotate(90 103 49)"
          fill="black"
        />
        <rect
          x="34"
          y="98"
          width="13"
          height="14"
          transform="rotate(90 34 98)"
          fill="black"
        />
        <rect x="89" y="7" width="14" height="7" fill="black" />
        <rect x="48" width="48" height="7" fill="black" />
        <rect x="103" y="7" width="7" height="14" fill="black" />
        <rect x="110" y="14" width="7" height="41" fill="black" />
        <rect x="6" y="35" width="6" height="35" fill="#4CCEDF" />
        <rect x="12" y="28" width="7" height="63" fill="#4CCEDF" />
        <rect x="19" y="21" width="9" height="77" fill="#4CCEDF" />
        <rect x="28" y="21" width="6" height="62" fill="#4CCEDF" />
        <rect x="34" y="14" width="7" height="49" fill="#4CCEDF" />
        <rect x="41" y="14" width="6" height="42" fill="#4CCEDF" />
        <rect x="47" y="14" width="8" height="35" fill="#4CCEDF" />
        <rect x="55" y="7" width="14" height="35" fill="#4CCEDF" />
        <rect x="69" y="7" width="20" height="28" fill="#4CCEDF" />
        <rect x="89" y="14" width="7" height="28" fill="#4CCEDF" />
        <rect x="96" y="14" width="7" height="35" fill="#4CCEDF" />
        <rect x="103" y="20" width="7" height="35" fill="#4CCEDF" />
        <rect x="117" y="55" width="7" height="7" fill="black" />
        <rect x="124" y="56" width="41" height="6" fill="black" />
        <rect x="152" y="62" width="13" height="7" fill="black" />
        <rect x="165" y="63" width="7" height="6" fill="black" />
        <rect x="173" y="70" width="6" height="34" fill="black" />
        <rect x="124" y="104" width="49" height="7" fill="black" />
        <rect x="110" y="104" width="7" height="35" fill="black" />
        <rect x="117" y="97" width="7" height="7" fill="black" />
        <rect x="117" y="112" width="7" height="7" fill="black" />
        <rect x="152" y="125" width="7" height="7" fill="black" />
        <rect x="131" y="132" width="28" height="7" fill="black" />
        <rect x="159" y="111" width="7" height="21" fill="black" />
        <rect x="124" y="90" width="7" height="7" fill="black" />
        <rect x="131" y="83" width="7" height="7" fill="black" />
        <rect x="103" y="70" width="7" height="7" fill="black" />
        <rect x="103" y="55" width="7" height="7" fill="black" />
        <rect x="96" y="55" width="7" height="29" fill="black" />
        <rect x="89" y="84" width="7" height="20" fill="black" />
        <rect x="96" y="104" width="7" height="14" fill="black" />
        <rect x="89" y="118" width="7" height="14" fill="black" />
        <rect x="96" y="125" width="7" height="14" fill="black" />
        <rect x="103" y="125" width="7" height="14" fill="black" />
        <rect x="124" y="111" width="7" height="21" fill="black" />
        <rect x="138" y="76" width="7" height="7" fill="black" />
        <rect x="110" y="62" width="7" height="8" fill="black" />
        <rect x="145" y="69" width="7" height="7" fill="black" />
        <rect x="145" y="83" width="7" height="15" fill="black" />
        <rect x="159" y="76" width="7" height="22" fill="black" />
        <rect x="103" y="77" width="7" height="48" fill="#E2E2E2" />
        <rect x="96" y="118" width="7" height="7" fill="#E2E2E2" />
        <rect x="96" y="84" width="7" height="20" fill="#E2E2E2" />
        <rect x="110" y="70" width="7" height="34" fill="#E2E2E2" />
        <rect x="117" y="62" width="7" height="35" fill="#E2E2E2" />
        <rect x="124" y="62" width="7" height="28" fill="#E2E2E2" />
        <rect x="131" y="62" width="7" height="21" fill="#E2E2E2" />
        <rect x="138" y="62" width="7" height="14" fill="#E2E2E2" />
        <rect x="145" y="62" width="7" height="7" fill="#E2E2E2" />
        <rect x="166" y="69" width="7" height="35" fill="#E2E2E2" />
        <rect x="152" y="69" width="7" height="35" fill="#E2E2E2" />
        <rect x="138" y="83" width="7" height="21" fill="#E2E2E2" />
        <rect x="131" y="90" width="7" height="14" fill="#E2E2E2" />
        <rect x="124" y="97" width="7" height="7" fill="#E2E2E2" />
        <rect x="117" y="104" width="7" height="8" fill="#E2E2E2" />
        <rect x="103" y="62" width="7" height="8" fill="#E2E2E2" />
        <rect x="110" y="55" width="7" height="7" fill="#E2E2E2" />
        <rect x="117" y="119" width="7" height="20" fill="#E2E2E2" />
        <rect x="124" y="132" width="7" height="7" fill="#E2E2E2" />
        <rect x="145" y="76" width="7" height="7" fill="#E2E2E2" />
        <rect x="159" y="69" width="7" height="7" fill="#E2E2E2" />
        <rect x="159" y="98" width="7" height="6" fill="#E2E2E2" />
        <rect x="145" y="98" width="7" height="6" fill="#E2E2E2" />
        <rect x="131" y="111" width="28" height="7" fill="#E9ADAD" />
        <rect x="131" y="118" width="21" height="14" fill="#FCE8CF" />
        <rect x="152" y="118" width="7" height="7" fill="#FCE8CF" />
        `,
    hands: `
        <rect x="111" y="48" width="7" height="28" fill="black" />
        <rect x="104" y="20" width="7" height="14" fill="black" />
        <rect x="97" y="27" width="7" height="14" fill="black" />
        <rect x="90" y="34" width="7" height="28" fill="black" />
        <rect x="83" y="41" width="7" height="28" fill="black" />
        <rect x="76" y="69" width="7" height="14" fill="black" />
        <rect x="69" y="76" width="7" height="41" fill="black" />
        <rect x="62" y="90" width="7" height="14" fill="black" />
        <rect x="76" y="90" width="7" height="20" fill="black" />
        <rect x="83" y="90" width="7" height="13" fill="black" />
        <rect x="97" y="76" width="7" height="13" fill="black" />
        <rect x="97" y="76" width="7" height="14" fill="black" />
        <rect x="90" y="83" width="7" height="7" fill="black" />
        <rect x="62" y="110" width="7" height="7" fill="black" />
        <rect x="97" y="55" width="14" height="7" fill="black" />
        <rect x="104" y="69" width="7" height="13" fill="black" />
        <rect x="55" y="97" width="7" height="20" fill="black" />
        <rect x="83" y="69" width="14" height="14" fill="#675858" />
        <rect x="90" y="62" width="21" height="7" fill="#675858" />
        <rect x="97" y="69" width="7" height="7" fill="#675858" />
        <rect x="76" y="83" width="14" height="7" fill="#675858" />
        <rect x="97" y="41" width="14" height="14" fill="#D9D9D9" />
        <rect x="62" y="104" width="7" height="6" fill="#D9D9D9" />
        <rect x="111" y="27" width="7" height="21" fill="#D9D9D9" />
        <rect
          x="125"
          y="34"
          width="7"
          height="21"
          transform="rotate(90 125 34)"
          fill="#D9D9D9"
        />
        <rect x="56" y="125" width="13" height="13" fill="black" />
        <rect x="35" y="104" width="13" height="13" fill="black" />
        <rect x="42" y="117" width="20" height="8" fill="black" />
        <rect x="49" y="125" width="7" height="6" fill="black" />
        <rect x="41" y="131" width="8" height="8" fill="black" />
        <rect x="27" y="131" width="8" height="8" fill="black" />
        <rect x="20" y="138" width="8" height="8" fill="black" />
        <rect x="34" y="124" width="8" height="8" fill="black" />
        <rect x="34" y="138" width="8" height="8" fill="black" />
        <rect x="27" y="145" width="8" height="8" fill="black" />
        <rect x="20" y="152" width="8" height="8" fill="black" />
        <rect x="13" y="145" width="8" height="8" fill="black" />
        <rect x="6" y="152" width="8" height="8" fill="black" />
        <rect x="13" y="159" width="8" height="8" fill="black" />
        <rect x="6" y="166" width="8" height="8" fill="black" />
        <rect y="159" width="7" height="7" fill="black" />
        <rect y="166" width="6" height="8" fill="black" />
        <rect x="48" y="111" width="7" height="6" fill="black" />
        <rect x="42" y="124" width="7" height="7" fill="#F0F0F0" />
        <rect x="27" y="138" width="8" height="8" fill="#F0F0F0" />
        <rect x="20" y="145" width="8" height="8" fill="#F0F0F0" />
        <rect x="13" y="152" width="8" height="8" fill="#F0F0F0" />
        <rect x="6" y="159" width="8" height="8" fill="#F0F0F0" />
        <rect x="34" y="131" width="8" height="8" fill="#F0F0F0" />
        <rect x="181" y="34" width="7" height="56" fill="black" />
        <rect x="209" y="34" width="7" height="28" fill="black" />
        <rect x="202" y="20" width="7" height="21" fill="black" />
        <rect x="195" y="20" width="7" height="7" fill="black" />
        <rect x="188" y="27" width="7" height="7" fill="black" />
        <rect x="195" y="48" width="14" height="7" fill="black" />
        <rect x="202" y="62" width="21" height="7" fill="black" />
        <rect x="188" y="76" width="35" height="7" fill="black" />
        <rect x="188" y="41" width="7" height="7" fill="black" />
        <rect x="188" y="69" width="7" height="7" fill="black" />
        <rect x="202" y="69" width="7" height="7" fill="black" />
        <rect x="195" y="41" width="14" height="7" fill="#D9D9D9" />
        <rect x="188" y="34" width="14" height="7" fill="#D9D9D9" />
        <rect x="209" y="69" width="14" height="7" fill="#D9D9D9" />
        <rect x="195" y="27" width="7" height="7" fill="#D9D9D9" />
        <rect x="181" y="27" width="7" height="7" fill="#D9D9D9" />
        <rect x="188" y="48" width="7" height="21" fill="#675858" />
        <rect x="195" y="55" width="7" height="21" fill="#675858" />
        <rect x="202" y="55" width="7" height="7" fill="#675858" />
        <rect x="223" y="20" width="7" height="84" fill="black" />
        <rect x="230" y="104" width="7" height="14" fill="black" />
        <rect x="237" y="118" width="7" height="13" fill="black" />
        <rect x="230" y="6" width="7" height="14" fill="black" />
        <rect x="237" width="7" height="13" fill="black" />
        <rect x="244" width="6" height="131" fill="black" />
        <rect x="230" y="104" width="7" height="14" fill="black" />
        <rect x="237" y="12" width="7" height="43" fill="#D9D9D9" />
        <rect x="230" y="20" width="7" height="84" fill="#D9D9D9" />
        <rect x="237" y="69" width="7" height="49" fill="#D9D9D9" />
        <rect x="237" y="55" width="7" height="14" fill="#F8EF77" />
      `,
    torso: `
        <rect y="56" width="14" height="7" fill="black" />
        <rect x="49" y="56" width="14" height="7" fill="black" />
        <rect x="14" width="21" height="7" fill="black" />
        <rect y="49" width="63" height="7" fill="black" />
        <rect y="42" width="14" height="7" fill="black" />
        <rect y="28" width="7" height="14" fill="black" />
        <rect x="56" width="7" height="14" fill="black" />
        <rect x="42" y="7" width="7" height="7" fill="black" />
        <rect x="42" y="21" width="7" height="7" fill="black" />
        <rect x="35" y="14" width="7" height="7" fill="black" />
        <rect x="49" y="14" width="7" height="7" fill="black" />
        <rect y="7" width="7" height="14" fill="black" />
        <rect x="7" width="7" height="35" fill="black" />
        <rect x="14" y="7" width="21" height="42" fill="#E2E2E2" />
        <rect x="49" y="21" width="7" height="28" fill="#E2E2E2" />
        <rect x="56" y="14" width="7" height="35" fill="#E2E2E2" />
        <rect x="35" y="28" width="14" height="21" fill="#E2E2E2" />
        <rect x="14" y="56" width="35" height="7" fill="#E2E2E2" />
        <rect x="7" y="35" width="7" height="7" fill="#E2E2E2" />
        <rect y="21" width="7" height="7" fill="#E2E2E2" />
        <rect width="7" height="7" fill="#E2E2E2" />
        <rect x="35" y="21" width="7" height="7" fill="#E2E2E2" />
        <rect x="35" width="14" height="7" fill="#E2E2E2" />
        <rect x="42" y="14" width="7" height="7" fill="#E2E2E2" />
        <rect x="49" width="7" height="14" fill="#E2E2E2" />
        <rect x="35" y="7" width="7" height="7" fill="#E2E2E2" />
      `,
    legs: `
        <rect x="28" width="56" height="7" fill="black" />
        <rect x="77" y="7" width="21" height="7" fill="black" />
        <rect x="77" y="34" width="14" height="7" fill="black" />
        <rect x="49" y="62" width="28" height="7" fill="black" />
        <rect y="49" width="42" height="6" fill="black" />
        <rect y="69" width="21" height="7" fill="black" />
        <rect x="14" y="62" width="14" height="7" fill="black" />
        <rect x="28" y="14" width="7" height="6" fill="black" />
        <rect x="21" y="20" width="14" height="7" fill="black" />
        <rect x="21" y="20" width="14" height="7" fill="black" />
        <rect x="21" y="27" width="14" height="7" fill="black" />
        <rect x="28" y="55" width="7" height="7" fill="black" />
        <rect x="7" y="42" width="7" height="7" fill="black" />
        <rect x="42" y="41" width="7" height="8" fill="black" />
        <rect x="77" y="14" width="7" height="7" fill="black" />
        <rect x="98" y="14" width="7" height="13" fill="black" />
        <rect x="105" y="21" width="7" height="13" fill="black" />
        <rect x="49" y="14" width="7" height="20" fill="black" />
        <rect x="70" y="14" width="7" height="48" fill="black" />
        <rect x="14" y="27" width="7" height="22" fill="black" />
        <rect x="49" y="41" width="7" height="21" fill="black" />
        <rect y="55" width="7" height="14" fill="black" />
        <rect x="98" y="34" width="21" height="7" fill="black" />
        <rect x="112" y="69" width="28" height="7" fill="black" />
        <rect x="105" y="62" width="13" height="7" fill="black" />
        <rect x="98" y="55" width="41" height="7" fill="black" />
        <rect x="91" y="48" width="14" height="7" fill="black" />
        <rect x="84" y="41" width="14" height="7" fill="black" />
        <rect x="112" y="41" width="14" height="7" fill="black" />
        <rect x="119" y="48" width="14" height="7" fill="black" />
        <rect x="139" y="62" width="8" height="7" fill="black" />
        <rect x="28" y="7" width="28" height="7" fill="black" />
        <rect x="28" y="34" width="28" height="7" fill="black" />
        <rect x="56" y="7" width="14" height="56" fill="#4CCEDF" />
        <rect x="70" y="7" width="7" height="7" fill="#4CCEDF" />
        <rect x="84" y="14" width="14" height="20" fill="#E2E2E2" />
        <rect x="35" y="14" width="14" height="20" fill="#E2E2E2" />
        <rect x="21" y="34" width="7" height="15" fill="#E2E2E2" />
        <rect x="77" y="21" width="7" height="13" fill="#E2E2E2" />
        <rect x="7" y="55" width="7" height="14" fill="#E2E2E2" />
        <rect x="105" y="41" width="7" height="14" fill="#E2E2E2" />
        <rect x="112" y="48" width="7" height="7" fill="#E2E2E2" />
        <rect x="98" y="41" width="7" height="7" fill="#E2E2E2" />
        <rect x="91" y="34" width="7" height="7" fill="#E2E2E2" />
        <rect x="98" y="27" width="7" height="7" fill="#E2E2E2" />
        <rect x="28" y="41" width="14" height="8" fill="#E2E2E2" />
        <rect x="14" y="55" width="14" height="7" fill="#E2E2E2" />
        <rect x="118" y="62" width="21" height="7" fill="#E2E2E2" />
        `,
  },
  ironMan: {
    head: `
<rect x="117" y="48" width="7" height="7" fill="black"/>
<rect x="34" y="7" width="21" height="7" fill="black"/>
<rect x="19" y="14" width="15" height="7" fill="black"/>
<rect x="6" y="21" width="13" height="7" fill="black"/>
<rect x="6" y="28" width="6" height="7" fill="black"/>
<rect y="35" width="6" height="35" fill="black"/>
<rect x="6" y="70" width="6" height="27" fill="black"/>
<rect x="19" y="91" width="6" height="7" transform="rotate(90 19 91)" fill="black"/>
<rect x="20" y="97" width="7" height="7" transform="rotate(90 20 97)" fill="black"/>
<rect x="40" y="105" width="6" height="6" transform="rotate(90 40 105)" fill="black"/>
<rect x="34" y="83" width="15" height="6" transform="rotate(90 34 83)" fill="black"/>
<rect x="40" y="63" width="20" height="6" transform="rotate(90 40 63)" fill="black"/>
<rect x="47" y="63" width="6" height="7" transform="rotate(90 47 63)" fill="black"/>
<rect x="47" y="56" width="7" height="6" transform="rotate(90 47 56)" fill="black"/>
<rect x="54" y="56" width="6" height="7" transform="rotate(90 54 56)" fill="black"/>
<rect x="54" y="49" width="7" height="7" transform="rotate(90 54 49)" fill="black"/>
<rect x="61" y="49" width="6" height="7" transform="rotate(90 61 49)" fill="black"/>
<rect x="61" y="42" width="7" height="6" transform="rotate(90 61 42)" fill="black"/>
<rect x="69" y="42" width="6" height="8" transform="rotate(90 69 42)" fill="black"/>
<rect x="89" y="35" width="7" height="20" transform="rotate(90 89 35)" fill="black"/>
<rect x="96" y="42" width="7" height="13" transform="rotate(90 96 42)" fill="black"/>
<rect x="103" y="49" width="6" height="13" transform="rotate(90 103 49)" fill="black"/>
<rect x="34" y="98" width="13" height="14" transform="rotate(90 34 98)" fill="black"/>
<rect x="89" y="7" width="14" height="7" fill="black"/>
<rect x="48" width="48" height="7" fill="black"/>
<rect x="103" y="7" width="7" height="14" fill="black"/>
<rect x="110" y="14" width="7" height="41" fill="black"/>
<rect x="6" y="35" width="6" height="35" fill="black"/>
<rect x="12" y="28" width="7" height="63" fill="black"/>
<rect x="19" y="21" width="9" height="77" fill="black"/>
<rect x="28" y="21" width="6" height="62" fill="black"/>
<rect x="34" y="14" width="7" height="49" fill="black"/>
<rect x="41" y="14" width="6" height="42" fill="black"/>
<rect x="47" y="14" width="8" height="35" fill="black"/>
<rect x="55" y="7" width="14" height="35" fill="black"/>
<rect x="69" y="7" width="20" height="28" fill="black"/>
<rect x="89" y="14" width="7" height="28" fill="black"/>
<rect x="96" y="14" width="7" height="35" fill="black"/>
<rect x="103" y="20" width="7" height="35" fill="black"/>
<rect x="110" y="55" width="7" height="7" fill="#D7A332"/>
<rect x="117" y="97" width="7" height="7" fill="#D7A332"/>
<rect x="117" y="62" width="35" height="7" fill="#9F2222"/>
<rect x="110" y="69" width="35" height="7" fill="#9F2222"/>
<rect x="103" y="76" width="35" height="7" fill="#9F2222"/>
<rect x="96" y="83" width="28" height="7" fill="#9F2222"/>
<rect x="110" y="111" width="7" height="21" fill="#9F2222"/>
<rect x="117" y="118" width="7" height="14" fill="#9F2222"/>
<rect x="165" y="69" width="7" height="35" fill="#9F2222"/>
<rect x="159" y="62" width="6" height="21" fill="#9F2222"/>
<rect x="152" y="69" width="7" height="14" fill="#9F2222"/>
<rect x="131" y="90" width="7" height="14" fill="#9F2222"/>
<rect x="138" y="76" width="15" height="19" fill="#9F2222"/>
<rect x="96" y="90" width="14" height="35" fill="#9F2222"/>
<path d="M138 95H165V104H138V95Z" fill="#9F2222"/>
<rect x="131" y="111" width="28" height="7" fill="#E9ADAD"/>
<rect x="131" y="118" width="21" height="14" fill="#FCE8CF"/>
<rect x="152" y="118" width="7" height="7" fill="#FCE8CF"/>
<rect x="117" y="55" width="7" height="7" fill="black"/>
<rect x="124" y="56" width="41" height="6" fill="black"/>
<rect x="152" y="62" width="7" height="7" fill="black"/>
<rect x="165" y="62" width="7" height="7" fill="black"/>
<rect x="172" y="69" width="6" height="35" fill="black"/>
<rect x="110" y="104" width="62" height="7" fill="black"/>
<rect x="117" y="90" width="7" height="7" fill="black"/>
<rect x="138" y="76" width="7" height="7" fill="black"/>
<rect x="117" y="90" width="14" height="7" transform="rotate(90 117 90)" fill="black"/>
<rect x="117" y="111" width="7" height="7" fill="black"/>
<rect x="152" y="125" width="7" height="7" fill="black"/>
<rect x="131" y="132" width="28" height="7" fill="black"/>
<rect x="159" y="111" width="7" height="21" fill="black"/>
<rect x="124" y="90" width="7" height="14" fill="black"/>
<rect x="124" y="83" width="14" height="7" fill="black"/>
<rect x="110" y="132" width="21" height="7" fill="black"/>
<rect x="103" y="62" width="7" height="14" fill="black"/>
<rect x="103" y="55" width="7" height="7" fill="black"/>
<rect x="96" y="70" width="7" height="13" fill="black"/>
<rect x="89" y="83" width="7" height="42" fill="black"/>
<rect x="89" y="125" width="7" height="7" fill="black"/>
<rect x="96" y="125" width="7" height="7" fill="black"/>
<rect x="103" y="125" width="7" height="14" fill="black"/>
<rect x="124" y="111" width="7" height="21" fill="black"/>
<rect x="110" y="62" width="7" height="7" fill="black"/>
<rect x="145" y="69" width="7" height="7" fill="black"/>
<rect x="142" y="88" width="7" height="7" fill="black"/>
<rect x="153" y="83" width="12" height="12" fill="black"/>
        `,
    hands: `
<rect x="83" y="69" width="14" height="14" fill="#675858"/>
<rect x="90" y="62" width="21" height="7" fill="#675858"/>
<rect x="97" y="69" width="7" height="7" fill="#675858"/>
<rect x="76" y="83" width="14" height="7" fill="#675858"/>
<rect x="90" y="41" width="21" height="7" fill="#9F2222"/>
<rect x="90" y="48" width="28" height="7" fill="#D7A332"/>
<rect x="62" y="104" width="7" height="6" fill="#9F2222"/>
<rect x="111" y="41" width="14" height="7" fill="#D7A332"/>
<rect x="125" y="34" width="7" height="21" transform="rotate(90 125 34)" fill="#9F2222"/>
<rect x="125" y="27" width="7" height="21" transform="rotate(90 125 27)" fill="#9F2222"/>
<rect x="56" y="125" width="13" height="13" fill="black"/>
<rect x="35" y="104" width="13" height="13" fill="black"/>
<rect x="42" y="117" width="20" height="8" fill="black"/>
<rect x="49" y="125" width="7" height="6" fill="black"/>
<rect x="41" y="131" width="8" height="8" fill="black"/>
<rect x="27" y="131" width="8" height="8" fill="black"/>
<rect x="20" y="138" width="8" height="8" fill="black"/>
<rect x="34" y="124" width="8" height="8" fill="black"/>
<rect x="34" y="138" width="8" height="8" fill="black"/>
<rect x="27" y="145" width="8" height="8" fill="black"/>
<rect x="20" y="152" width="8" height="8" fill="black"/>
<rect x="13" y="145" width="8" height="8" fill="black"/>
<rect x="6" y="152" width="8" height="8" fill="black"/>
<rect x="13" y="159" width="8" height="8" fill="black"/>
<rect x="6" y="166" width="8" height="8" fill="black"/>
<rect y="159" width="7" height="7" fill="black"/>
<rect y="166" width="6" height="8" fill="black"/>
<rect x="48" y="111" width="7" height="6" fill="black"/>
<rect x="42" y="124" width="7" height="7" fill="#F0F0F0"/>
<rect x="27" y="138" width="8" height="8" fill="#F0F0F0"/>
<rect x="20" y="145" width="8" height="8" fill="#F0F0F0"/>
<rect x="13" y="152" width="8" height="8" fill="#F0F0F0"/>
<rect x="6" y="159" width="8" height="8" fill="#F0F0F0"/>
<rect x="34" y="131" width="8" height="8" fill="#F0F0F0"/>
<rect x="111" y="62" width="7" height="14" fill="black"/>
<rect x="104" y="20" width="7" height="7" fill="black"/>
<rect x="97" y="27" width="7" height="14" fill="black"/>
<rect x="90" y="34" width="7" height="7" fill="black"/>
<rect x="83" y="41" width="7" height="28" fill="black"/>
<rect x="76" y="69" width="7" height="14" fill="black"/>
<rect x="69" y="76" width="7" height="41" fill="black"/>
<rect x="62" y="90" width="7" height="14" fill="black"/>
<rect x="76" y="90" width="7" height="20" fill="black"/>
<rect x="83" y="90" width="7" height="13" fill="black"/>
<rect x="97" y="76" width="7" height="13" fill="black"/>
<rect x="97" y="76" width="7" height="14" fill="black"/>
<rect x="90" y="83" width="7" height="7" fill="black"/>
<rect x="62" y="110" width="7" height="7" fill="black"/>
<rect x="90" y="55" width="35" height="7" fill="black"/>
<rect x="104" y="69" width="7" height="13" fill="black"/>
<rect x="55" y="97" width="7" height="20" fill="black"/>
<rect x="181" y="34" width="7" height="56" fill="black"/>
<rect x="209" y="34" width="7" height="28" fill="black"/>
<rect x="202" y="20" width="7" height="21" fill="black"/>
<rect x="195" y="20" width="7" height="7" fill="black"/>
<rect x="188" y="20" width="7" height="7" fill="black"/>
<rect x="195" y="48" width="14" height="7" fill="black"/>
<rect x="202" y="62" width="21" height="7" fill="black"/>
<rect x="188" y="76" width="35" height="7" fill="black"/>
<rect x="188" y="41" width="7" height="7" fill="black"/>
<rect x="188" y="69" width="7" height="7" fill="black"/>
<rect x="202" y="69" width="7" height="7" fill="black"/>
<rect x="195" y="41" width="14" height="7" fill="#9F2222"/>
<rect x="188" y="34" width="14" height="7" fill="#9F2222"/>
<rect x="209" y="69" width="14" height="7" fill="#9F2222"/>
<rect x="195" y="27" width="7" height="7" fill="#9F2222"/>
<rect x="181" y="27" width="14" height="7" fill="#9F2222"/>
<rect x="188" y="48" width="7" height="21" fill="#675858"/>
<rect x="195" y="55" width="7" height="21" fill="#675858"/>
<rect x="202" y="55" width="7" height="7" fill="#675858"/>
<rect x="223" y="20" width="7" height="84" fill="black"/>
<rect x="223" y="104" width="7" height="14" fill="black"/>
<rect x="237" y="118" width="7" height="13" fill="black"/>
<rect x="244" y="124" width="7" height="7" fill="black"/>
<rect x="230" y="6" width="7" height="14" fill="black"/>
<rect x="237" width="7" height="13" fill="black"/>
<rect x="244" width="7" height="7" fill="black"/>
<rect x="251" width="6" height="131" fill="black"/>
<rect x="230" y="111" width="7" height="7" fill="black"/>
<rect x="244" y="21" width="7" height="38" fill="#9F2222"/>
<rect x="237" y="27" width="7" height="77" fill="#9F2222"/>
<rect x="230" y="20" width="7" height="91" fill="#D7A332"/>
<rect x="237" y="13" width="7" height="14" fill="#D7A332"/>
<rect x="237" y="104" width="7" height="14" fill="#D7A332"/>
<rect x="244" y="110" width="7" height="14" fill="#D7A332"/>
<rect x="244" y="7" width="7" height="14" fill="#D7A332"/>
<rect x="244" y="72" width="7" height="38" fill="#9F2222"/>
<rect x="244" y="59" width="7" height="13" fill="#D7A332"/>
`,
    torso: `
  <rect y="56" width="7" height="7" fill="black"/>
<rect x="56" y="56" width="7" height="7" fill="black"/>
<rect x="14" width="21" height="7" fill="black"/>
<rect y="49" width="63" height="7" fill="black"/>
<rect y="42" width="14" height="7" fill="black"/>
<rect y="28" width="7" height="14" fill="black"/>
<rect x="56" width="7" height="14" fill="black"/>
<rect x="42" y="7" width="7" height="7" fill="black"/>
<rect x="42" y="21" width="7" height="7" fill="black"/>
<rect x="35" y="14" width="7" height="7" fill="black"/>
<rect x="49" y="14" width="7" height="7" fill="black"/>
<rect y="14" width="7" height="7" fill="black"/>
<rect x="7" width="7" height="35" fill="black"/>
<rect x="14" y="7" width="21" height="42" fill="#9F2222"/>
<rect x="49" y="21" width="7" height="28" fill="#9F2222"/>
<rect x="56" y="14" width="7" height="35" fill="#9F2222"/>
<rect x="35" y="28" width="14" height="21" fill="#9F2222"/>
<rect x="7" y="56" width="49" height="7" fill="#D7A332"/>
<rect x="7" y="35" width="7" height="7" fill="#9F2222"/>
<rect y="21" width="7" height="7" fill="#9F2222"/>
<rect x="35" y="21" width="7" height="7" fill="#9F2222"/>
<rect x="35" width="14" height="7" fill="#9F2222"/>
<rect x="42" y="14" width="7" height="7" fill="#9F2222"/>
<rect x="49" width="7" height="14" fill="#9F2222"/>
<rect x="35" y="7" width="7" height="7" fill="#9F2222"/>
  `,
    legs: `
<rect x="28" width="63" height="7" fill="black"/>
<rect x="77" y="7" width="28" height="7" fill="black"/>
<rect x="77" y="34" width="14" height="7" fill="black"/>
<rect x="49" y="62" width="28" height="7" fill="black"/>
<rect y="49" width="42" height="6" fill="black"/>
<rect y="69" width="21" height="7" fill="black"/>
<rect x="21" y="62" width="7" height="7" fill="black"/>
<rect x="28" y="14" width="7" height="6" fill="black"/>
<rect x="21" y="20" width="14" height="7" fill="black"/>
<rect x="21" y="20" width="14" height="7" fill="black"/>
<rect x="21" y="27" width="14" height="7" fill="black"/>
<rect x="28" y="55" width="7" height="7" fill="black"/>
<rect x="7" y="42" width="7" height="7" fill="black"/>
<rect x="42" y="41" width="7" height="8" fill="black"/>
<rect x="77" y="14" width="7" height="7" fill="black"/>
<rect x="98" y="14" width="7" height="7" fill="black"/>
<rect x="105" y="21" width="7" height="13" fill="black"/>
<rect x="49" y="14" width="7" height="20" fill="black"/>
<rect x="70" y="14" width="7" height="48" fill="black"/>
<rect x="14" y="27" width="7" height="22" fill="black"/>
<rect x="49" y="41" width="7" height="21" fill="black"/>
<rect y="55" width="7" height="14" fill="black"/>
<rect x="91" y="34" width="28" height="7" fill="black"/>
<rect x="112" y="69" width="27" height="7" fill="black"/>
<rect x="105" y="62" width="13" height="7" fill="black"/>
<rect x="126" y="55" width="7" height="7" fill="black"/>
<rect x="98" y="55" width="7" height="7" fill="black"/>
<rect x="91" y="48" width="14" height="7" fill="black"/>
<rect x="84" y="41" width="14" height="7" fill="black"/>
<rect x="112" y="41" width="14" height="7" fill="black"/>
<rect x="119" y="48" width="7" height="7" fill="black"/>
<rect x="132" y="62" width="7" height="7" fill="black"/>
<rect x="28" y="7" width="28" height="7" fill="black"/>
<rect x="28" y="34" width="28" height="7" fill="black"/>
<rect x="56" y="7" width="14" height="56" fill="black"/>
<rect x="70" y="7" width="7" height="7" fill="black"/>
<rect x="84" y="14" width="14" height="20" fill="#9F2222"/>
<rect x="35" y="14" width="14" height="20" fill="#9F2222"/>
<rect x="21" y="34" width="7" height="15" fill="#9F2222"/>
<rect x="77" y="21" width="7" height="13" fill="#9F2222"/>
<rect x="7" y="62" width="14" height="7" fill="#9F2222"/>
<rect x="105" y="41" width="7" height="14" fill="#9F2222"/>
<rect x="112" y="48" width="7" height="7" fill="#9F2222"/>
<rect x="98" y="41" width="7" height="7" fill="#9F2222"/>
<rect x="98" y="21" width="7" height="13" fill="#9F2222"/>
<rect x="28" y="41" width="14" height="8" fill="#9F2222"/>
<rect x="7" y="55" width="21" height="7" fill="#D7A332"/>
<rect x="118" y="62" width="14" height="7" fill="#9F2222"/>
<rect x="105" y="55" width="21" height="7" fill="#D7A332"/>
`,
  },
};

const personage = ref({
  head: equipmentData.default.head,
  hands: equipmentData.default.hands,
  torso: equipmentData.default.torso,
  legs: equipmentData.default.legs,
});

const bodyPartChangeActive = ref({
  head: 'default',
  hands: 'default',
  torso: 'default',
  legs: 'default',
});

const changedEquipment = (partBody, equipment) => {
  personage.value[partBody] = equipmentData[equipment][partBody];

  bodyPartChangeActive.value[partBody] = equipment;
};
</script>

<template>
  <div class="container personge__container">
    <div class="personage">
      <svg
        v-html="personage.head"
        xmlns="http://www.w3.org/2000/svg"
        width="179"
        height="139"
        viewBox="0 0 179 139"
        fill="none"
        class="personage__head"
      ></svg>
      <svg
        v-html="personage.hands"
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="174"
        viewBox="0 0 250 174"
        fill="none"
        class="personage__hands"
      ></svg>
      <svg
        v-html="personage.torso"
        xmlns="http://www.w3.org/2000/svg"
        width="63"
        height="63"
        viewBox="0 0 63 63"
        fill="none"
        class="personage__torso"
      ></svg>
      <svg
        v-html="personage.legs"
        xmlns="http://www.w3.org/2000/svg"
        width="147"
        height="76"
        viewBox="0 0 147 76"
        fill="none"
        class="personage__legs"
      ></svg>
    </div>
  </div>

  <div class="equipment">
    <h2 class="equipment__title">Сняряжение</h2>
    <div class="equipment__container">
      <h3 class="equipment__body-part__title">Голова</h3>
      <div class="equipment__body-part__container">
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.head === 'default',
          }"
          @click="() => changedEquipment('head', 'default')"
        >
          По умолчанию
        </div>
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.head === 'ironMan',
          }"
          @click="() => changedEquipment('head', 'ironMan')"
        >
          Железный Человек
        </div>
      </div>
    </div>
    <div class="equipment__container">
      <h3 class="equipment__body-part__title">Торс</h3>
      <div class="equipment__body-part__container">
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.torso === 'default',
          }"
          @click="() => changedEquipment('torso', 'default')"
        >
          По умолчанию
        </div>
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.torso === 'ironMan',
          }"
          @click="() => changedEquipment('torso', 'ironMan')"
        >
          Железный Человек
        </div>
      </div>
    </div>
    <div class="equipment__container">
      <h3 class="equipment__body-part__title">Руки</h3>
      <div class="equipment__body-part__container">
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.hands === 'default',
          }"
          @click="() => changedEquipment('hands', 'default')"
        >
          По умолчанию
        </div>
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.hands === 'ironMan',
          }"
          @click="() => changedEquipment('hands', 'ironMan')"
        >
          Железный Человек
        </div>
      </div>
    </div>
    <div class="equipment__container">
      <h3 class="equipment__body-part__title">Ноги</h3>
      <div class="equipment__body-part__container">
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.legs === 'default',
          }"
          @click="() => changedEquipment('legs', 'default')"
        >
          По умолчанию
        </div>
        <div
          class="equipment__body-part__change"
          :class="{
            'body-part__change--active':
              bodyPartChangeActive.legs === 'ironMan',
          }"
          @click="() => changedEquipment('legs', 'ironMan')"
        >
          Железный Человек
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
