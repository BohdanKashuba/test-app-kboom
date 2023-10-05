import { NextApiHandler } from 'next';
import { _teamDetailList } from '@/_mock/teams';

const handler: NextApiHandler = (req, res) => {
  const { team } = req.query as { team: string };

  if (!team) {
    return res.status(200).json(_teamDetailList);
  }

  const findTeam = _teamDetailList.find(({ slug }) => slug === team);

  if (!findTeam) {
    return res.status(400).json({ error: 'Team not found' });
  }

  res.status(200).json(findTeam);
};

export default handler;
