<script setup lang="ts">
import Hero from "~/app/layout/Hero.vue";
import ImageWithBlur from "~/app/images/ImageWithBlur.vue";

useHead({
  title:
    "Welcome to the official website of Microsoft's Advanced Defense Division (MADD).",
});
</script>

<template>
  <Hero />
  <section class="browsers">
    <ImageWithBlur src="/images/chrome.png" alt="Chrome as a weapon" />
    <ImageWithBlur src="/images/firefox.png" alt="Firefox as a weapon" />
    <ImageWithBlur src="/images/edge.png" alt="Edge as a weapon" />
    <ImageWithBlur src="/images/safari.png" alt="Safari as a weapon" />
  </section>
  <section class="features">
    <article>
      <h3>Discover Innovation in the Service of Security</h3>
      <p>
        <b>Microsoft's Advanced Defense Division (MADD)</b> pushes the
        boundaries of technology to ensure a secure future.
      </p>
      <p>
        With a team of world-renowned researchers, engineers, and security
        experts, MADD is committed to defending vital interests through
        <b>technological innovation</b>.
      </p>
      <p>
        Our mission is to create a <b>safer world</b> by harnessing the power of
        artificial intelligence, secure computing, and cutting-edge solutions.
      </p>
    </article>
    <ImageWithBlur
      src="/images/innovation_and_security.png"
      alt="Representation of innovation and security"
    />
    <ImageWithBlur src="/images/expertise.png" alt="Our Areas of Expertise" />
    <article>
      <h3>Our Areas of Expertise</h3>
      <p>
        Advanced Cybersecurity: We strive to push the limits of cybersecurity by
        developing cutting-edge solutions to detect, prevent, and neutralize the
        most sophisticated digital threats.
      </p>
      <p>
        Artificial Intelligence for Defense: Our AI expertise enables the
        development of autonomous systems capable of rapidly analyzing data to
        make informed decisions in complex and dynamic environments.
      </p>
      <p>
        Covert Surveillance Technologies: We innovate in the field of covert
        surveillance to ensure the security and protection of sensitive
        operations.
      </p>
      <p>
        Next-Generation Cryptography: Our team of cryptographers develops
        advanced encryption methods to secure communications and confidential
        data.
      </p>
    </article>
    <article>
      <h3>Commitment to Global Security</h3>
      <p>
        MADD collaborates closely with governments, security agencies, and
        industrial partners worldwide to counter emerging threats. We take pride
        in contributing to the creation of a future where technology is an
        unwavering asset in preserving peace and security.
      </p>
    </article>
    <ImageWithBlur
      src="/images/global_security.png"
      alt="Commitment to Global Security"
    />
    <ImageWithBlur src="/images/careers.png" alt="Careers Within MADD" />
    <article>
      <h3>Careers Within MADD</h3>
      <p>
        Join us in our quest to push the boundaries of technological security.
        We are looking for bright and determined minds to tackle the most
        complex challenges of our time. Explore our job offers and discover how
        you can be part of the team shaping the future.
      </p>
    </article>
    <article>
      <h3>Contact Us</h3>
      <p>
        For any inquiries, partnerships, or collaborations, feel free to contact
        us at the following address:
        <a class="link" href="mailto:contact@madd.microsoft.com"
          >contact@madd.microsoft.com</a
        >
      </p>
      <p>
        Follow us on social media to stay informed about the latest advancements
        in security and technological innovation.
      </p>
      <p>
        Join the Security Revolution with Microsoft's Advanced Defense Division.
      </p>
    </article>
    <ImageWithBlur src="/images/contact.png" alt="Contact us" />
  </section>
</template>

<style scoped>
.browsers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  padding: 1rem;
}

img {
  max-width: 20%;
}

.features {
  margin-top: 4rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.features > :nth-child(3) {
  grid-row-start: 4;
}
.features > :nth-child(7) {
  grid-row-start: 8;
}

.features h3 {
  font-size: 1.3rem;
}

.features p {
  font-size: 1rem;
  line-height: 1.3rem;
  font-family: system-ui, sans-serif;
  color: var(--foreground-secondary-color);
}

@media (min-width: 900px) {
  .browsers {
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem;
  }

  .features {
    padding: 3rem;
    grid-template-columns: 1fr 1fr;
  }

  .features > :nth-child(3),
  .features > :nth-child(7) {
    grid-row-start: auto;
  }
}
</style>
