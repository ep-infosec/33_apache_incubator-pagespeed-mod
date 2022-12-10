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

#ifndef NET_INSTAWEB_REWRITER_PUBLIC_INLINE_REWRITE_CONTEXT_H_
#define NET_INSTAWEB_REWRITER_PUBLIC_INLINE_REWRITE_CONTEXT_H_

#include "net/instaweb/rewriter/public/output_resource_kind.h"
#include "net/instaweb/rewriter/public/resource.h"
#include "net/instaweb/rewriter/public/rewrite_context.h"
#include "net/instaweb/rewriter/public/rewrite_driver.h"
#include "net/instaweb/rewriter/public/server_context.h"
#include "pagespeed/kernel/base/basictypes.h"
#include "pagespeed/kernel/base/string.h"
#include "pagespeed/kernel/base/string_util.h"
#include "pagespeed/kernel/html/html_element.h"

namespace net_instaweb {

class CachedResult;
class CommonFilter;
class OutputPartitions;

// Class that unifies tasks common to building rewriters for filters
// that inline resources.
class InlineRewriteContext : public RewriteContext {
 public:
  // Note that you should also call StartInlining() to do the work.
  InlineRewriteContext(CommonFilter* filter, HtmlElement* element,
                       HtmlElement::Attribute* src);
  ~InlineRewriteContext() override;

  // Starts the actual inlining process, and takes over memory management
  // of this object.
  // Returns true if the process is started, false if it cannot be started
  // because the input resource cannot be created, in which case 'this' is
  // deleted and accordingly no rewriting callbacks are invoked.
  bool StartInlining();

 protected:
  // Subclasses of InlineRewriteContext must override these:

  // Return whether the resource should be inlined. If false
  // is returned, this should set *explanation to the reason for the failure.
  // explanation is guaranteed to be non-NULL.
  virtual bool ShouldInline(const ResourcePtr& resource,
                            GoogleString* explanation) const = 0;
  virtual void RenderInline(const ResourcePtr& resource,
                            const StringPiece& text, HtmlElement* element) = 0;
  virtual RewriteDriver::InputRole InputRole() const = 0;

  // Subclasses of InlineRewriteContext may override this to customize
  // resource creation. Default version just uses
  // CommonFilter::CreateInputResource().
  // url is permitted to be NULL. is_authorized is not.
  virtual ResourcePtr CreateResource(const char* url, bool* is_authorized);

  // InlineRewriteContext takes care of these methods from RewriteContext;
  bool Partition(OutputPartitions* partitions,
                 OutputResourceVector* outputs) override;
  void Rewrite(int partition_index, CachedResult* partition,
               const OutputResourcePtr& output) override;
  void Render() override;
  OutputResourceKind kind() const override;

  HtmlElement* get_element() const { return element_; }

 private:
  CommonFilter* filter_;
  HtmlElement* element_;
  HtmlElement::Attribute* src_;

  DISALLOW_COPY_AND_ASSIGN(InlineRewriteContext);
};

}  // namespace net_instaweb

#endif  // NET_INSTAWEB_REWRITER_PUBLIC_INLINE_REWRITE_CONTEXT_H_