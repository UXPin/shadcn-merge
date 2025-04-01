import * as React from 'react';
import ResizablePanelGroup from '../ResizablePanelGroup';
import ResizablePanel from '../../ResizablePanel/ResizablePanel';
import ResizableHandle from '../../ResizableHandle/ResizableHandle';

export default (
  <ResizablePanelGroup
    direction='horizontal'
    className='rounded-lg border '
    uxpId='resizable-panel-group-horizontal'
  >
    <ResizablePanel defaultSize={50} uxpId='resizable-panel-1'>
      One
    </ResizablePanel>
    <ResizableHandle withHandle uxpId='resizable-handle-1' />
    <ResizablePanel defaultSize={50} uxpId='resizable-panel-2'>
      <ResizablePanelGroup
        direction='vertical'
        uxpId='resizable-panel-group-vertical'
      >
        <ResizablePanel defaultSize={25} uxpId='resizable-panel-3'>
          Two
        </ResizablePanel>
        <ResizableHandle uxpId='resizable-handle-2' />
        <ResizablePanel defaultSize={75} uxpId='resizable-panel-4'>
          Three
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
);
