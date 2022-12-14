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

#ifndef PAGESPEED_KERNEL_BASE_STRING_H_
#define PAGESPEED_KERNEL_BASE_STRING_H_

#include <string.h>

#include <string>

typedef std::string GoogleString;

// TODO(oschaaf): this method was deprecated and removed in absl.
// clean this up by removing all call spots and then remove this.
inline bool RunningOnValgrind() {return false;}

#endif  // PAGESPEED_KERNEL_BASE_STRING_H_
