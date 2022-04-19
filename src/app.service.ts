import { Injectable } from '@nestjs/common';
import {
  AtlasAttachmentLoader,
  SkeletonJson,
  Skeleton,
  AnimationStateData,
} from 'spine-core/src';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }

  generateResource(): string {
    console.log(
      AtlasAttachmentLoader,
      SkeletonJson,
      Skeleton,
      AnimationStateData,
    );
    return 'done';
  }
}
