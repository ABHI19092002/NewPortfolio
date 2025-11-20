
export const SkillBadge = ({iconName:Icon, heading}) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-2xl px-3 py-3 bg-neutral-800 text-white">
      <Icon size={25} />
      <h1>{heading}</h1>
    </div>
  );
};
