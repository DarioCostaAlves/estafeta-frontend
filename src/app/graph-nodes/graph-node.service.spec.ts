import { TestBed } from '@angular/core/testing';

import { GraphNodeService } from './graph-node.service';

describe('GraphNodeService', () => {
  let service: GraphNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
