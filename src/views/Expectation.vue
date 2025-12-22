<template>
    <section>
        <div id="page-content" class="w-full overflow-scroll h-full">
            <BackButton />
            <p class="text-5xl is_c text-gold italic text-center mb-2">A Indian Wedding</p>
            <img src="/src/assets/deco11.png" class="object-contain my-4 w-30 m-auto">
            <img src="/src/assets/vn-weding-2.png" class="w-full object-contain mb-4">
            <div class="px-4 mb-16">
                <p class="text-3xl text-gold mb-2 mt-8 text-center cg_s">The More The Merrier</p>
                <p class="mt-4 text-center cg_s text-lg">In Indian weddings, it is common to invite a much larger
                    number of guests compared to weddings in Japan. In addition to family, relatives, coworkers, and
                    friends, even
                    neighbors or people the couple has interacted with just once may be invited. This reflects the
                    Indian culture that values human connections, and the couple’s desire to have as many people as
                    possible witness this spiritual event. It’s not unusual for 700 to 900 guests to gather at the
                    venue.</p><img src="/src/assets/vietnam-wedding-1.jpeg"
                    class="w-full object-contain my-4 rounded-2xl">
            </div>
            <div class="px-4 mb-8">
                <p class="text-3xl text-gold mb-2 mt-8 text-center cg_s">Traditional Dress Code</p>
                <p class="mt-4 text-center cg_s text-lg">In Indian weddings, there is no strict dress code like
                    “suits” or
                    “pastel-colored dresses.” Some guests wear formal clothes, while others come in casual outfits.
                    Especially in rural areas, it's common for guests to wear something close to everyday clothes.
                    However, if you are close to the bride or groom (like a best friend or sibling), it’s typical to
                    dress up traditional. Since there are many photo opportunities, guests often care about how they
                    look,
                    and recently, more young people enjoy dressing up for the occasion.</p><img
                    src="/src\assets\vn-wedding-3.png" class="w-full object-contain my-4 rounded-2xl"><img
                    src="/src/assets/vn-wedding-4.png" class="w-full object-contain my-4 rounded-2xl">
            </div>
            <div class="px-4 mb-20">
                <p class="text-3xl text-gold mb-2 mt-8 text-center cg_s">The Money Gift</p>
                <p class="mt-4 text-center cg_s text-lg">Since many of you will be traveling all the way from Japan to
                    India,
                    please feel free to join the wedding WITHOUT bringing any monetary gift. Guests india may bring
                    cash gifts as part of the local custom, but please don’t feel obligated — just come in and enjoy the
                    celebration with us.</p><img src="/src/assets/deco13.png" class="m-auto mb-4 mt-8 w-20">
                <p class="text-start italic cg_s text-gold text-lg">This wedding will be a simplified version. In a
                    traditional
                    Indian wedding, various ceremonies are held starting about a week before the actual wedding day.
                    If you're interested, feel free to check the links below:<br> ▹
                    <a href="http://www.kvccdocs.com/KVCC/2013-Fall/SOC101-HYA/content/L-06/Indian%20Wedding%20Traditions.pdf" target="_blank"
                        rel="noopener noreferrer" class="text-stroke underline! text-white opacity-90">What is a
                        Indian wedding
                        like?</a><br>▹ <a href="https://www.theknot.com/content/hindu-wedding-guest-qa" target="_blank"
                        rel="noopener noreferrer" class="text-stroke underline! text-white opacity-90">Indian
                        Wedding Guide | Key
                        Differences &amp; Tips for Attending</a>
                </p>
            </div>
        </div>
        <div class="relative">
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
                <LanguageChanger />
            </div>
            <DownFrame />
        </div>
    </section>
</template>
<script setup lang="ts">
import BackButton from '../components/BackButton.vue';
import DownFrame from '../components/DownFrame.vue';
import LanguageChanger from '../components/LanguageChanger.vue';
</script>