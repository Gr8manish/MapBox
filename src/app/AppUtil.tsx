import React from 'react';

interface AppData {
  isLoading: boolean;
  error?: Error;
}

const useFetchUserData = (): AppData => {
  const [data, updateData] = React.useState<AppData>({
    isLoading: true,
  });

  const fetchData = async (): Promise<void> => {
    try {
      updateData({
        ...data,
        isLoading: false,
      });
    } catch (error) {
      updateData({
        ...data,
        isLoading: false,
        error: error,
      });
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export { useFetchUserData };
