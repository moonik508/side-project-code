interface resultType {
  path: string;
  order: number;
}
const routerListMap: Map<string, resultType> = new Map([
  ['grant', { path: 'permission', order: 1 }],
  ['category', { path: 'category', order: 2 }],
  ['live', { path: 'home', order: 3 }],
  ['space', { path: 'spaces', order: 4 }],
  ['brand', { path: 'brands', order: 5 }],
  ['framework', { path: 'framework', order: 6 }],
  ['support', { path: 'support', order: 7 }],
  ['statistics', { path: 'statistics', order: 8 }],
  ['marketplace', { path: 'marketplace', order: 9 }],
  ['ad-viewer', { path: 'ad', order: 10 }],
  ['sms', { path: 'sms', order: 11 }],
  ['livetour', { path: 'livetour', order: 12 }],
  ['ticket', { path: 'ticket', order: 13 }],
]);
export const getRouterList = (permissionList: string[]): string[] => {
  // permissionList 가 여러 element 를 가진 배열로 전달될 수 있기 때문에 해당하는 값에 따라 전달하는 router 들을 중복값을 1개만 남기는 처리를 진행
  const sortedRouter: Map<string, number> = new Map();
  if (permissionList.length === 0) {
    return [];
  }
  for (let i = 0; i < permissionList.length; i++) {
    const routerInfo = routerListMap.get(permissionList[i]);
    if (routerInfo === undefined) {
      continue;
    }
    sortedRouter.set(routerInfo.path, routerInfo.order);
  }
  return [...sortedRouter.entries()]
    .sort((element1, element2) => {
      return element1[1] - element2[1];
    })
    .map((element) => {
      return element[0];
    });
};
