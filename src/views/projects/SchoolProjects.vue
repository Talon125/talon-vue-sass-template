<script setup lang="ts">
import NavigationButton1 from '@/components/NavigationButton1.vue'
import PushButton from '@/components/PushButton.vue'
import GlassCard from '@/components/GlassCard.vue'
import { Accordion } from '@ark-ui/vue/accordion'

const SCHOOL_GRADES = [
  'Very Good',
  'Good',
  'Satisfactory',
  'Enough',
  'Not Enough'
]

const SCHOOLS = [
  'Pre-School*',
  'Kindergarten',
  'Elementary School 1st grade',
  'Elementary School 2nd grade',
  'Elementary School 3rd grade',
  'Elementary School 4th grade',
  'Middle School 1st grade',
  'Middle School 2nd grade',
  'Middle School 3rd grade',
  'Middle School 4th grade',
  'Höhere Technische Lehranstalt 1st grade',
  'Höhere Technische Lehranstalt 2nd grade',
  'Höhere Technische Lehranstalt 3rd grade',
  'Höhere Technische Lehranstalt 4th grade',
  'Höhere Technische Lehranstalt 5th grade'
  // "Fachhochschule (Bachelor's Study) Year 1",
  // "Fachhochschule (Bachelor's Study) Year 2",
  // "Fachhochschule (Bachelor's Study) Year 3",
]
</script>

<template>
  <main class="container">
    <NavigationButton1 to="/projects">
      &leftarrow;&ensp;Back to Projects
    </NavigationButton1>
    <GlassCard class="info-card" title="Reference">
      <div class="flex">
        <div class="flex-item">
          Austrian grading system:
          <table class="indent">
            <tbody>
              <tr v-for="(name, i) of SCHOOL_GRADES" :key="i">
                <td class="text-right">{{ i + 1 }}</td>
                <td>=</td>
                <td>{{ name }}</td>
              </tr>
            </tbody>
          </table>
          <!-- <ul class="ref-list">
            <li>1 = Very Good</li>
            <li>2 = Good</li>
            <li>3 = Satisfactory</li>
            <li>4 = Enough</li>
            <li>5 = Not Enough</li>
          </ul> -->
          <hr />
          <p class="opening-p text-justify">
            *I went to pre-school which was in a separate location. Kindergarten
            and Elementary School were then in the same location (as it is in
            the US). That school also had something called "Pre-K"...
            Pre-Kindergarten? Not sure how that would fit here. Doesn't matter
            too much anyway.
          </p>
        </div>
        <div class="flex-item">
          Cumulative grade:
          <table class="indent">
            <tbody>
              <tr v-for="(name, i) of SCHOOLS" :key="i">
                <td>Grade</td>
                <td class="text-right">{{ i - 1 }}:</td>
                <td>{{ name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </GlassCard>
    <Accordion.Root collapsible multiple>
      <Accordion.Item value="HTL">
        <Accordion.ItemTrigger>
          HTL Wien West
          <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <div class="inception">
            <Accordion.Root collapsible multiple>
              <Accordion.Item value="3">
                <Accordion.ItemTrigger>
                  3rd Grade (Cumulative: 11) &mdash; 2 items
                  <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <div class="content">
                    <p class="opening-p text-justify">
                      We started learning a bit of JavaScript and were tasked
                      with programming a Cookie Clicker-like game and a
                      match-the-pairs memory game. My JavaScript and overall web
                      development skills at the time were quite... not good.
                      Nevertheless, I'll keep them here as an exhibit.
                    </p>
                    <p>
                      <img
                        class="inline-icon"
                        src="/icons/dialog-warning.svg"
                      />
                      <b class="amber">Caution:</b> Memory Game and Cookie
                      Clicker Pro were only tested to work on 1080p screens (and
                      at 100% scaling).
                    </p>
                  </div>
                </Accordion.ItemContent>
              </Accordion.Item>
              <Accordion.Item value="4">
                <Accordion.ItemTrigger>
                  4th Grade (Cumulative: 12) &mdash; 5 items
                  <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <div class="content">meow...</div>
                </Accordion.ItemContent>
              </Accordion.Item>
              <Accordion.Item value="5">
                <Accordion.ItemTrigger>
                  5th Grade (Cumulative: 13) &mdash; 0 items
                  <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <div class="content">meow...</div>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="FH">
        <Accordion.ItemTrigger>
          FH Campus Wien
          <Accordion.ItemIndicator> ʌ </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <div class="content">
            <h1>Coming soon...</h1>
            <p>A new adventure awaits!</p>
          </div>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </main>
</template>

<style scoped lang="scss">
.inception {
  padding: 0 0.5em 1px;
}

.content {
  padding: 0.5em;
}

.amber {
  color: orange;
}

.opening-p {
  margin-top: 0;
}

.info-card {
  margin: 1em 0;
}

.ref-list {
  padding-left: 1em;
  list-style: none;
}

.indent {
  margin-left: 1em;
}

@media (width <= 576px) {
  .flex {
    flex-direction: column;
  }

  .info-card {
    margin: 1em;
  }
}
</style>
