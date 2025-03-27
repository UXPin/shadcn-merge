import * as React from 'react';
import Tabs from '../Tabs';
import TabsList from '../../TabsList/TabsList';
import TabsContent from '../../TabsContent/TabsContent';
import TabsTrigger from '../../TabsTrigger/TabsTrigger';
export default (
  <Tabs defaultValue='account' uxpId='tabs'>
    <TabsList uxpId='tabs-list'>
      <TabsTrigger value='account' uxpId='tabs-trigger-account'>
        Account
      </TabsTrigger>
      <TabsTrigger value='password' uxpId='tabs-trigger-password'>
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent value='account' uxpId='tabs-content-account'>
      Make changes to your account here.
    </TabsContent>
    <TabsContent value='password' uxpId='tabs-content-password'>
      Change your password here.
    </TabsContent>
  </Tabs>
);
