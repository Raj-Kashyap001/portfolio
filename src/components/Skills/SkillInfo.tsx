import skillsData from "./data";

interface SkillObj {
  skill: string;
  percentage: number;
}
interface Skill {
  title: string;
  iconURL: string;
  skills: Array<SkillObj>;
}
interface SkillInfoProps {
  selectedSkill: string;
}

const SkillInfo: React.FC<SkillInfoProps> = ({ selectedSkill }) => {
  const skillData: Array<Skill> = skillsData;
  const currentSelectedSkillCard = skillData.find(
    (skill: Skill) => skill.title === selectedSkill
  );
  return (
    <div className="proficiency-table">
      <h4 className="skill-title">{selectedSkill}</h4>
      <div className="skill-content flow">
        {currentSelectedSkillCard?.skills.map((obj: SkillObj) => (
          <div key={obj.skill} className="skill-data">
            <div className="skill-name-container">
              <p>{obj.skill}</p>
              <span className="skill-progress">{`${obj.percentage}%`}</span>
            </div>
            <div
              className="skill-progress-bar"
              style={
                {
                  "--progress-bar-width": obj.percentage,
                } as React.CSSProperties
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillInfo;
