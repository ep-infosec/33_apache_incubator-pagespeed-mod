/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

#ifndef PAGESPEED_KERNEL_IMAGE_JPEG_UTILS_H_
#define PAGESPEED_KERNEL_IMAGE_JPEG_UTILS_H_

#include <cstddef>

#include "pagespeed/kernel/base/basictypes.h"

namespace net_instaweb {
class MessageHandler;
}

namespace pagespeed {

namespace image_compression {

using net_instaweb::MessageHandler;

// Utility class that reads jpeg parameter from jpeg images.
class JpegUtils {
 public:
  // Get image quality with which the input jpeg image is compressed. This
  // method will return -1 if it is not able to either jpeg image is invalid or
  // image quality can't be determined.
  //
  // See comments in implementation for additional details on how quality is
  // computed.
  static int GetImageQualityFromImage(const void* image_data,
                                      size_t image_length,
                                      MessageHandler* handler);

 private:
  JpegUtils();
  DISALLOW_COPY_AND_ASSIGN(JpegUtils);
};

}  // namespace image_compression

}  // namespace pagespeed

#endif  // PAGESPEED_KERNEL_IMAGE_JPEG_UTILS_H_
