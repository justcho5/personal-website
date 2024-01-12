import CurriculumVitaeJson from "../../cv.json";

function CurriculumVitae() {
  const CurriculumVitae = CurriculumVitaeJson;
  const experiences = CurriculumVitae.experiences;
  const education = CurriculumVitae.education;
  return (
    <div className="flex justify-center">
      <div className="flex gap-[50px] CurriculumVitae max-w-[950px]">
        <div className="flex flex-col gap-[20px] min-w-[200px] max-w-[200px] ">
          <p className="text-[24px]">justina cho</p>
          <img src="./src/assets/picture.png" className="w-auto" />
          <div className="underline">education</div>
          <div className="flex flex-col gap-[15px]">
            {education.map((ed) => (
              <div key={ed.id} className="CurriculumVitaeItem">
                <div>
                  {ed.school}
                  <br />
                  {ed.degree}
                </div>
              </div>
            ))}
          </div>
          <a className="text-blue-600 hover:text-blue-800" href="#">
            Download CV
          </a>
        </div>

        <div className="flex flex-col gap-[23px]">
          <div className="underline">experiences</div>
          <div className="flex flex-col gap-[20px]">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col CurriculumVitaeItem gap-[8px]"
              >
                <div>
                  {exp.role} / {exp.institution.join(" / ")} / {exp.start} -{" "}
                  {exp.end}
                </div>
                <div>
                  {exp.description}{" "}
                  <a
                    className="text-blue-600 hover:text-blue-800"
                    href={exp.projectLink}
                  >
                    {exp.projectLinkTitle}
                  </a>
                </div>
                <div className="text-[14px]">{exp.skills.join(" - ")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumVitae;
