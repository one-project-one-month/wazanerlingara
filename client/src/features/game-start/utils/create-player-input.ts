type Props = {
  id: string;
  name: string;
};
export const createPlayerInput = (name = ""): Props => ({
  id: crypto.randomUUID(),
  name,
});
