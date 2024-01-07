const generateDiceBearAvataaars = (seed) =>
 ` https://api.dicebear.com/7.x/micah/svg?${seed}=Anika`;

const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/7.x/avataaars/svg?${seed}=Felix`;

const generateDiceBearGridy = (seed) =>
  `https://api.dicebear.com/7.x/miniavs/svg?${seed}=Felix`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearGridy(Math.random());
    data.push(res);
  }
  return data;
};
