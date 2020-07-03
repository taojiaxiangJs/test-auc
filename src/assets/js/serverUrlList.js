const SERVERURL={
    /**  资源  **/ 

    'queryResTypeTabListUrl': `/ump/resource/pageQueryResourceType?`,                  // 查询 资源类型 列表
    'queryResTypeCardListUrl': `/ump/resource/headerType`,                           // 查询 资源类型 卡片列表     y  
    'addResTypeUrl':`/ump/resource/addResourceType`,                                  // 新增 资源类型        
    'queryResTypeInsUrl':`/ump/resource/queryResourceType?typeEnName=`,               // 查询 资源类型 详情
    'saveEditResTypeUrl':`/ump/resource/updateResourceType`,                          // 保存 资源类型 编辑
    'deleteResTypeUrl':`/ump/resource/deleteResourceType`,                           // 删除 资源类型 
    'checkResTypePropertyUrl':`/ump/resource/verifyResourceTypeProperty`,             // 校验 资源类型 属性（新增资源类型）

    'queryResListUrl': `/ump/resource/pageQueryResourceInstance`,                    // 查询 资源实例 列表
    'queryResPropertyUrl':`/ump/resource/queryResourceInstanceProperty?typeEnName=`,  // 查询 资源实例 属性   y
    'addResInsUrl':`/ump/resource/addResourceInstance`,                               // 新增 资源实例 
    'queryResInsUrl': `/ump/resource/viewResourceInstance?resourceId=`,               // 查询 资源实例 详情
    'saveEditResInsUrl': `/ump/resource/updateResourceInstance`,                      // 保存 资源实例 编辑
    'deleteResInsUrl': `/ump/resource/deleteResourceInstance`,            // 删除 资源实例    y

    /**  对象  **/ 

    'querySubTypeTabListUrl':`/ump/subject/typeList?`,                                  // 查询 对象类型 列表
    'querySubTypeCardListUrl' : `/ump/subject/headerType`,                             // 查询 对象类型 卡片列表
    'addSubTypeUrl':`/ump/subject/typeadd`,                                             // 新增 对象类型
    'querySubTypeInsUrl':`/ump/subject/typeDetail?whichType=2&typeEnName=`,             // 查询 对象类型 详情
    'saveEditSubTypeUrl':`/ump/subject/typeUpdate`,                                     // 保存 对象类型 编辑
    'deleteSubTypeUrl':`/ump/subject/typedelete`,                                      // 删除 对象类型
    'checkSubTypePropertyUrl':`/ump/subject/typeVerify`,                                // 校验 对象类型 属性（新增对象类型）

    'querySubListUrl':`/ump/subject/subjectList`,                                              // 查询 对象实例 列表
    'querySubPropertyUrl':`/ump/subject/subjectTpye?whichType=2&typeEnName=`,                   // 查询 对象实例 属性
    'addSubInsUrl':`/ump/subject/subjectadd`,                                                   // 新增 对象实例
    'querySubInsUrl':`/ump/subject/subjectDetail?subjectId=`,                                   // 查询 对象实例 详情
    'saveEditSubInsUrl':`/ump/subject/subjectUpdate`,                                           // 保存 对象实例 编辑
    'deleteSubInsUrl':`/ump/subject/subjectdelete`,                                  // 删除 对象实例   y
    'queryPrivateResourceUrl': `/ump/resource/queryResourceInstanceBySubjectId`,   // 查询 对象实例 私有资源 y


    // 'querySubTypeTabListUrl':`../../static/subClassTabList.json`,
    // 'querySubTypeCardListUrl':`../../static/subClassCardList.json?`,
    // 'querySubListUrl':`../../static/allSubList.json?`,
    // 'querySubPropertyUrl':`../../static/subProperty.json?`,
    // 'querySubInsUrl':`../../static/subIns.json?`,


    // 操作
    'queryActionListUrl':`/ump/action/queryAllAction`,
    'queryActionItemUrl':`/ump/action/queryActionByActionId`,
    'addActionUrl':`/ump/action/addAction`,
    'updActionUrl':`/ump/action/updAction`,
    'delActionUrl':`/ump/action/delAction`,
    // 环境
    'queryEnvironmentListUrl':`/ump/env/queryAllEnv`,
    'queryEnvironmentItemUrl':`/ump/env/queryEnvByEnvId`,
    'addEnvironmentUrl':`/ump/env/addEnv`,
    'updEnvironmentUrl':`/ump/env/updEnv`,
    'delEnvironmentUrl':`/ump/env/delEnv`,

    // 策略
    // 'queryPolicyTreeUrl':`../../static/policyTree.json`,
    'queryPolicyTreeUrl':`/ump/policy/getPolicyTree`,                       // 查询 策略组
    'queryPolicyListUrl':`/ump/policy/queryAllPolicy`,                      // 查询 策略 列表
    'addPolicyGroupUrl':`/ump/policy/addPolicyGroup`,                       // 新增 策略组
    'addPolicyUrl':`/ump/policy/addPolicy`,                                 // 新增 策略实例
    'queryPolicyBasicInfoUrl':`/ump/policy/queryPolicyBasicInfo`,           // 查询 策略实例 基本信息  
    'queryPolicySubjectUrl':`/ump/policy/queryPolicySubject`,               // 查询 策略实例 已添加的对象
    'queryPolicyResourceUrl':`/ump/policy/queryPolicyResource`,             // 查询 策略实例 已添加的资源
    'queryPolicyActionUrl':`/ump/policy/queryPolicyAction`,                 // 查询 策略实例 已添加的操作
    'queryPolicyEnvUrl':`/ump/policy/queryPolicyEnv`,                       // 查询 策略实例 已添加的环境
    'updPolicyUrl':`/ump/policy/updPolicy`,                                 // 更新 策略实例
    'delPolicyUrl':`/ump/policy/delPolicy`,                                 // 删除 策略实例

    'queryAllAttrUrl':`/ump/subject/queryAllProperty`,
    'updProperty':`/ump/subject/updProperty`,

}
export default SERVERURL
        

        

        

