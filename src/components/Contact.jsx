import { contact, profile } from "../data/profile";
import { Reveal } from "./motion";
import { GitHubIcon, LinkedInIcon } from "./icons/Icons";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container container--narrow">
        <Reveal>
          <p className="contact__pre">{contact.pre}</p>
          <h2 className="contact__title">
            Let's build something <em>that ships.</em>
          </h2>
          <p className="section-intro" style={{ margin: "24px auto 0" }}>
            {contact.blurb}
          </p>

          <a className="contact__mail" href={`mailto:${profile.socials.email}`}>
            {profile.socials.email}
          </a>

          <div className="contact__actions">
            <a
              className="btn btn--outline"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              className="btn btn--outline"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
