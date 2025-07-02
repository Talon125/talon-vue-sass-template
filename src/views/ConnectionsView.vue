<script setup lang="ts">
import GlassCard from '@/components/GlassCard.vue'
import PushButton from '@/components/PushButton.vue'
import ContactQuick from '@/components/ContactQuick.vue'
import ContactCard from '@/components/ContactCard.vue'
import { Clipboard } from '@ark-ui/vue/clipboard'
</script>

<template>
  <main class="container">
    <GlassCard title="Quick Links">
      <!-- <p class="text-center">Wanna get in touch with me?&emsp;:o</p> -->
      <div class="icon-group">
        <!-- <ContactQuick src="/icons/Discord.svg" toClipboard="oktalon" />
        <ContactQuick
          src="/icons/internet-mail.svg"
          toClipboard="talonszoradi@gmail.com"
        /> -->
        <ContactQuick
          src="/icons/GitHub_Personal.svg"
          href="https://github.com/Talon125"
        />
        <ContactQuick
          src="/icons/GitHub_School.svg"
          href="https://github.com/Oktalon-Szoradi"
        />
        <ContactQuick
          src="/icons/YouTube.svg"
          href="https://www.youtube.com/@oktalon"
        />
        <ContactQuick
          src="/icons/Reddit.svg"
          href="https://www.reddit.com/user/TalonS125/"
        />
        <ContactQuick
          src="/icons/Steam.svg"
          href="https://steamcommunity.com/id/Talon_S/"
        />
        <ContactQuick
          src="/icons/TETR.IO.svg"
          href="https://steamcommunity.com/id/Talon_S/"
        />
      </div>
    </GlassCard>
    <div class="card-group-upper">
      <ContactCard title="Discord" src="/icons/Discord.svg">
        I've also got Discord on my phone, so I should be most
        responsive&emsp;:3
        <div class="text-center">
          <PushButton></PushButton>
        </div>
        <div class="text-justify">
          <p>
            <b>Fun Fact:</b>
            I also have a Discord account dedicated for school. Well, it was.
            During the distance learning era, 1-2 teachers decided to use
            Discord instead of Google Meet, so, as I do, I decided to separate
            personal and school.
          </p>
          I don't use it anymore. It's more of just a "note-to-self" account
          now. I log into it rarely. So... not gonna share it here lol.
        </div>
        <!-- <img src="/icons/Discord.svg" /> -->
        <!-- <Clipboard.Root default-value="oktalon">
          <Clipboard.Label>Discord</Clipboard.Label>
          <Clipboard.Control>
            <Clipboard.Input />
            <Clipboard.Trigger>
              <Clipboard.Indicator>
                <img src="/icons/klipper.svg" />
                <template #copied
                  ><img src="/icons/dialog-ok-apply.svg"
                /></template>
              </Clipboard.Indicator>
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Clipboard.Root> -->
      </ContactCard>
      <ContactCard title="E-Mail" src="/icons/internet-mail.svg">
        Prefer electronic mail? I do check my emails from time to time.
        <div class="text-center">
          <PushButton></PushButton>
        </div>
        <p>This is my personal email address, by the way.</p>
        <!-- <img src="/icons/internet-mail.svg" />
        <Clipboard.Root default-value="talonszoradi@gmail.com">
          <Clipboard.Label>E-Mail</Clipboard.Label>
          <Clipboard.Control>
            <Clipboard.Input />
            <Clipboard.Trigger>
              <Clipboard.Indicator>
                Copy
                <template #copied> Copied! </template>
              </Clipboard.Indicator>
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Clipboard.Root> -->
      </ContactCard>
    </div>
    <div class="card-group">
      <ContactCard title="Git&shy;Hub" src="/icons/GitHub.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="flex">
          <div class="flex-item text-center github">
            <img class="resize" src="/icons/GitHub_Personal.svg" />
            <p>meow</p>
            <PushButton href="https://github.com/Talon125">
              Personal
            </PushButton>
          </div>
          <div class="flex-item text-center github">
            <img class="resize" src="/icons/GitHub_School.svg" />
            <p>meow</p>
            <PushButton href="https://github.com/Oktalon-Szoradi">
              "School"
            </PushButton>
          </div>
        </div>
      </ContactCard>
      <ContactCard title="You&shy;Tube" src="/icons/YouTube.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://www.youtube.com/@oktalon">
            Talon S.
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Reddit" src="/icons/Reddit.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://www.reddit.com/user/TalonS125/">
            u/TalonS125
          </PushButton>
        </div>
      </ContactCard>

      <ContactCard title="Steam" src="/icons/Steam.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://steamcommunity.com/id/Talon_S/">
            Talon_S
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="TETR&shy;.IO" src="/icons/TETR.IO.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://ch.tetr.io/u/talon"> TALON </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="speedrun&shy;.com" src="/icons/speedrun.com.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://www.speedrun.com/users/TalonS">
            TalonS
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Notris Foes" src="/icons/NotrisFoes.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton
            href="https://notrisfoes.com/users/profile.php?id=7100829"
          >
            Talon
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Nuke&shy;tris" src="/icons/Nuketris.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://nuketris.com/user?username=Talon">
            Talon
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Roblox" src="/icons/Roblox.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://www.roblox.com/users/70005867/profile">
            XxAwesomeGamerDudexX
          </PushButton>
          <PushButton href="https://www.roblox.com/users/61890918/profile">
            Taloncool5
          </PushButton>
          <PushButton href="https://www.roblox.com/users/56790371/profile">
            Talonblue5
          </PushButton>
          <PushButton href="https://www.roblox.com/users/49632123/profile">
            oktalon
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Virus&shy;Total" src="/icons/VirusTotal.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://www.virustotal.com/gui/user/TalonS125">
            TalonS125
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Trevor&shy;Space" src="/icons/TheTrevorProject.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton
            href="https://www.trevorspace.org/profile/557464-talon-s/"
          >
            Talon S.
          </PushButton>
        </div>
      </ContactCard>
      <ContactCard title="Win&shy;Classic" src="/icons/WinClassic.svg">
        Description should go here! Meow! Lorem ipsum dolor sit amet!!
        <div class="text-center">
          <PushButton href="https://winclassic.net/user/2987">
            Talon
          </PushButton>
        </div>
      </ContactCard>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.button-icon {
  width: 24px;
}

.icon-group {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
}

.card-group-upper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  > * {
    flex: 1;

    @media (width <= 576px) {
      margin: 0 1em;
    }
  }

  @media (width <= 576px) {
      margin-top: 2em;
    }
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 2em;

  > * {
    flex-grow: 1;
    margin: 0;

    @media (width <= 576px) {
      margin: 0 1em;
    }
  }
}

.resize {
  margin: -32px;
}

.github {
  margin-top: 2em;
}
</style>
