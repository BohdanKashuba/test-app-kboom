import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {ERoutes} from "@/constants/routes";

// ----------------------------------------------------------------------

export default function Index() {
  const { push, query } = useRouter();

  useEffect(() => {
    if (typeof query.team === 'string') {
      push(query.team + ERoutes.QUESTS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return null;
}
